import React from 'react'
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    
    <nav className='primary'>
        <NavLink to='/'>
         Home
        </NavLink>
        <NavLink to='/contact'>
         Contact
        </NavLink>
        <NavLink to='/Blog'>
         Blog 
        </NavLink>
        
    </nav>
    // <nav>
    //     <Link to='/'>Home</Link>
    //     <Link to='/contact'>Contact</Link>
    //     <Link to='/blog'>Blog</Link>
    // </nav>
  )
}
export default Navbar