import React from "react";
import "./navbar.css"

function Navbar(){
    return(
        <>
            <nav classNameName="navbar sticky-top navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Baby</a>
        <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contact Us</a>
            </li>
            
          </ul>
        </div>
      </nav>
        </>
    );
}

export default Navbar;