import React from 'react'
import { Link } from 'react-router-dom'


import './navbar.css'

const Navbar = () => {

  return (
    <div className="Navbar">
        <div className="logo">
            <h1>Prega-X</h1>
        </div>

        <ul>
            <li> <Link to="/">
            Home
            </Link>
                 </li>
            <li>
                <Link to="/trimester">
                Trimester   </Link>
            </li>
            
            <li>
                <Link
                to="/todo">
                Planner   </Link>
                
              </li>
            
            <li>
              
              <Link to="/chat">Chat</Link>
                </li>
           
          
            
        </ul>
        
                
              
    </div>
  )
}

export default Navbar