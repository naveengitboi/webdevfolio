import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import '../css/Navbar.css'
function Navbar(props) {
    const {textEff} = props;
    return (
        <nav className='navbar' >
            <div className="logo" data-initial="JNAVEEN" onMouseOver={(e) => textEff(e)}>
                JNAVEEN
            </div>
            <ul className='navlinks'>
                <li><NavLink to='/' className='linkEle '>Work</NavLink></li>
                <li><NavLink to='/info' className='linkEle'>info</NavLink></li>
            </ul>
            <div className="socialLinks">
                <a href="" rel="noreferrer"  className='linkEle'  >Insta<MdArrowOutward/> </a>
                <a href="" rel="noreferrer" className='linkEle'>Resume <MdArrowOutward/></a>
            </div>
        </nav>
    )
}

export default Navbar