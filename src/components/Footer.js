import React from 'react'
import '../css/Footer.css'
function Footer() {
  return (
    <div className=' footerContainer'>
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
              <li><a href="https://github.com/naveengitboi" rel="noreferrer" target='_blank'>Github</a></li>
              <li><a href="https://leetcode.com/naveengitboi/" rel="noreferrer" target='_blank'>Leetcode</a></li>
              <li><a href="https://www.linkedin.com/in/naveen-jangiti-1a1b86235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noreferrer" target='_blank' >Linked In</a></li>
              <li><a href="https://www.instagram.com/_atrociuos_arts/" rel="noreferrer" target='_blank'>Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p className='minifont'>@01/2024 last updated</p>
    </div>
  )
}

export default Footer
