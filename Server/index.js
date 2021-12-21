const express = require('express');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const authenticate = require('./middleware/authenticate')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config({ path: './config.env' })
const PORT = process.env.PORT
const User = require('./Model/userSchema')
require('./db/conn')
var cors = require('cors')
const app = express();
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: `http://localhost:3000`
}))
// routing 
app.get('/', (req, res) => {

    res.send("Cookie Set");
})


// registering user 
app.post("/registration", (req, res) => {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
        return res.status(422).json({ error: "plz filled the field" })
    }
    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: "email already exist" })
        }
        const user = new User({ name, phone, email, password })
        user.save().then(() => {
            res.status(201).json({ msg: "user registered successfully" })
        }).catch((err) => {
            console.log(err)
        })
    })
})

// login user 
app.post("/signin", async (req, res) => {
    try {
        let tokens;

        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ err: "plz filled the data" })
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            tokens = await userLogin.generateAuthToken();
            console.log(tokens)
            res.cookie("jwt", tokens, {
                expires: new Date(Date.now() + 100000000),
                httpOnly: true
                // secure:true 
            });


            if (!isMatch) {
                return res.status(400).json({ error: "Invalid Credential" })
            } else {
                return res.status(200).json({ message: "user logged in succcessfully" })

            }

        } else {
            return res.status(400).json({ error: "Invalid Credential" })
        }
    } catch (err) {
        console.log(err);
    }
})

app.get("/about", authenticate, (req, res) => {
    console.log("Hello my About")
    res.send(req.rootUser)
})
app.get("/logout",authenticate,async (req, res) => {
    try{
        console.log(req.rootUser);
     req.rootUser.tokens = req.rootUser.tokens.filter((curElm)=>{
         return curElm.token !== req.token
     })
    res.clearCookie("jwt");
    res.status(200).send("user logout successfully")
    await req.rootUser.save();
    
    }catch(err){
        console.log(err);
    }
    
})

app.listen(PORT, (req, res) => {
    console.log('server running in port no 8000')
})