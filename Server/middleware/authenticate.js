const jwt = require("jsonwebtoken")
const User = require("../Model/userSchema")

const Authenticate =async(req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})
        if(!rootUser){throw new Error("user not Found")}
        req.token = token;
        req.rootUser =rootUser;
        req.userID = rootUser._id;
        next();

    }catch(err){
        res.status(400).send("Unathorized: No token provided")
        console.log('you have to provide jwt token')
    }
}
module.exports = Authenticate;