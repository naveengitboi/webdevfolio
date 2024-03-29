import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import '../css/Navbar.css'
function Navbar(props) {
    const { textEff } = props;
    const [ham, setHam] = useState(false)
    const handleHamBurger = () => {
        setHam((prev) => !prev)

    }

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
                <a href="https://www.instagram.com/_atrociuos_arts/" rel="noreferrer" target='_blank' className='linkEle'  >Insta<MdArrowOutward /> </a>
                <a href="/assets/resume.pdf" rel="noreferrer" target='_blank' className='linkEle'>Resume <MdArrowOutward /></a>
            </div>
            <div className="hamburgerMenu">
                <RxHamburgerMenu onClick={handleHamBurger} />
            </div>

            <ul className={ham ? "mobileNavlinks mobileLinksActive" : "mobileNavlinks"}>
                <li><NavLink to='/' className='linkEle '>Work</NavLink></li>
                <li><NavLink to='/info' className='linkEle'>info</NavLink></li>
                <li><a href="https://www.instagram.com/_atrociuos_arts/" rel="noreferrer" target='_blank' className='linkEle'  >Insta<MdArrowOutward /> </a></li>
                <li><a href="/assets/resume.pdf" rel="noreferrer" target='_blank' className='linkEle'>Resume <MdArrowOutward /></a></li>

            </ul>
            {/* <div className="glossyEffect"></div> */}

        </nav>
    )
}

export default Navbar