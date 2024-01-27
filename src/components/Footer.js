import React from 'react'
import '../css/Footer.css'
function Footer() {
    return (
        <div className='footerContainer'>
            <div className="horizontalline"></div>
            <div className="footerContent">
                <div className="leftContent">
                    <h1 className='logo'>
                        JNAVEEN
                    </h1>
                </div>
                <div className="rightContent">
                    <div className="footerlinks">
                        <p className='minifont'>Links</p>
                        <ul className='smallfont'>
                            <li><a href="" >Github</a></li>
                            <li><a href="" >Leetcode</a></li>
                            <li><a href="" >Linked In</a></li>
                            <li><a href="" >Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className='minifont'>@01/2024 last updated</p>
        </div>
    )
}

export default Footer