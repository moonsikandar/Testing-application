import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";

const Navbar = () => {
    const [login,setLogin]=useState(false)

    const checklogin = ()=> {
        setLogin(!login)
    }
  return (
    <div>
      <div className="my-navbar">
        <Link to="/">Home </Link>
        <Link to="about"> About </Link>
        <Link to="contact">Contact </Link>
        <Link to="login"><button  onClick={checklogin}>{login?"Logout":"login"}</button></Link>
        <hr></hr>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {!!login ?<Route path="login" element={<Login/>}/> : <Route path="login" element={<Logout/>}/>}
        </Routes>
        
    </div>
  );
};

export default Navbar;
