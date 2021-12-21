import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Registration() {
 

  
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  })

  let name, value;
  const changeData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }
  const handleInput = async (e) => {
    e.preventDefault();
    const {name,phone,email,password} =user;
    try{
      const res = await fetch("http://localhost:8000/registration",{
        method:"POST",
        headers:{
          "Content-Type" :"application/json"
        },
        body:JSON.stringify({
          name,phone,email,password
        })
      })
      const data = await res.json();
      if(data.status === 422 || !data){
        window.alert("Unsuccessful Registration")
        console.log("Invalid Registration")
      }else{
        navigate("/login")
        console.log("successfully registered")
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="registration d-flex justify-content-center align-items-center flex-column">
      <h3 className="registration-head mt-5 mb-4 about-text">Registration Here</h3>
      <form method="post" className="registration-form">
        <div className="mb-4 outline">
          <label htmlFor="name" className="form-label">Your Name &nbsp; &nbsp; &nbsp; </label>
          <input type="text" id="name" name='name' value={user.name} onChange={changeData} />

        </div>
        <div className="mb-4 outline">
          <label htmlFor="phone" className="form-label">Phone Number &nbsp; &nbsp; &nbsp;</label>
          <input type="text" id="phone" name='phone' value={user.phone} onChange={changeData} />
        </div>
        <div className="mb-4 outline">
          <label htmlFor="email" className="form-label">Email address &nbsp; &nbsp; &nbsp;</label>
          <input type="email" id="email" name='email' value={user.email} onChange={changeData} />

        </div>
        <div className="mb-4 outline">
          <label htmlFor="password" className="form-label">Password &nbsp; &nbsp; &nbsp; &nbsp;</label>
          <input type="password" id="password" name='password' value={user.password} onChange={changeData} />
        </div>

        <button type="submit" onClick={handleInput} className="btn btn-primary mx-auto">Register</button>
      </form>
    </div>
  );
}

export default Registration;