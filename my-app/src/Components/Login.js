import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Login() {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  let name, value;
  const changeData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }
  const loginData = async (e) => {
    e.preventDefault()
    const { email, password } = user;
    const res = await fetch("http://localhost:8000/signin", {
      method: "POST",
      credentials: 'include',
      headers: {

        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email, password
      })
    })
    const data = await res.json()
    if (data.status === 400 || !data) {
      window.alert("invalid credential")
      console.log("Invalid Credential")
    } else {
      console.log("Successfully Logged in")
      navigate("/")
    }

  }
  return (
    <div className='login'>
      <div className=" d-flex justify-content-center align-items-center flex-column">
        <h3 className='login-head mb-4 about-text'>Login Here</h3>
        <form method='post' className="login-form">
          <div className="mb-4 login-outline">
            <label htmlFor="email" className="form-label">Email address &nbsp; &nbsp; &nbsp;</label>
            <input type="email" onChange={changeData} id="email" name='email' />

          </div>
          <div className="mb-4 login-outline">
            <label htmlFor="password" className="form-label">Password &nbsp; &nbsp; &nbsp; &nbsp;</label>
            <input type="password" onChange={changeData} id="password" name='password' />
          </div>

          <button type="submit" onClick={loginData} className="btn btn-primary mx-auto">Login</button>
        </form>
      </div>
    </div>

  );
}

export default Login;