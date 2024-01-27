import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import '../css/Navbar.css'
function Navbar() {
    return (
        <nav className='navbar'>
            <div className="logo">
                J Naveen
            </div>
            <ul className='navlinks'>
                <li><NavLink to='/' className='linkEle '>Work</NavLink></li>
                <li><NavLink to='/info' className='linkEle'>info</NavLink></li>
            </ul>
            <div className="socialLinks">
                <a href="" className='linkEle'>Insta<MdArrowOutward/> </a>
                <a href="" className='linkEle'>Resume <MdArrowOutward/></a>
            </div>
        </nav>
    )
}

export default Navbar