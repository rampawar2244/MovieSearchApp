import React from 'react'
import "./Assets/css/Navbar.scss"
function Navbar() {
    
  return (
    <div className='Navbar'>
        <ul className='navbarItem'>
            <li className='navbarItems'>Home</li>
            <li className='navbarItems'>About</li>
            <li className='navbarItems'>Portfolio</li>
            <li className='navbarItems'>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar