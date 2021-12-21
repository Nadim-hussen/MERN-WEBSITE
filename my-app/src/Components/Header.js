import '../App.css';

import { NavLink } from "react-router-dom";
import { useState } from 'react';
function Header() {
  const [cls,setCls] = useState('nav-toggle')
  const [cls1,setCls1] =useState('links')
 
  function listen(){
    if(cls1 === 'links'){
      setCls1('navlinks')
      setCls('nav-toggle')
    }else if(cls1 === 'navlinks'){
      setCls1('links')
      setCls('nav-toggle')
    }else{
      setCls1('links')
      setCls('nav-toggle')
    }
  }
  
  return (
    <div className='header'>

      <nav>
        <button className={cls} onClick={listen}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={cls1}>
          <li> <NavLink className="a"
            to="/"

          >
            Home
          </NavLink></li>
          <li> <NavLink className="a"
            to="/about" >
            About
          </NavLink></li>
          <li>  <NavLink className="a"
            to="/registration">
            Signup
          </NavLink></li>
          <li>
            <NavLink className="a"
              to="/login"
            >
              Login
            </NavLink></li>
            <li>
            <NavLink className="a"
              to="/logout"
            >
              Logout
            </NavLink></li>
        </ul>
      </nav>

    </div>
  );
}

export default Header;
