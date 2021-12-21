import {  Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Login from './Components/Login';
import Home from './Components/Home';
import About from './Components/About';
import Logout from "./Components/Logout";
import Registration from "./Components/Registration";
function App() {
  return (
    <div className="app">
      <Header />
   <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    
    </div>
  );
}

export default App;
