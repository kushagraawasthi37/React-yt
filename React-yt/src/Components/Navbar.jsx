import React from "react";
import "../style/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          {/* <img src="" alt="" /> */}
          <h1>Kushagra</h1>
        </div>
        <div className="nav-right">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Section</a>
          <a href="">Contact us</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
