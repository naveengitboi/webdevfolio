import React, {useState } from 'react'
import '../css/InfoPage.css'
function PageNavList(props) {
    const handleSetActive = (e) => {
        for(let item of props.contents){
            if (item.sectionName.toLowerCase() == e.target.innerText.toLowerCase()) {
                e.target.classList.add('activeSection');
                break
            }
           
        }
    }
    return (
        <div className='pageNavList'>
            <p className='smallfont'>contents</p>
            <ul className='pagelinks minifont'>
                {
                    props.contents.map((section, i) => (
                        <li key={i} onClick={(e) => handleSetActive(e)}><a href={'#' + section.sectionLink}  > {section.sectionName}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PageNavList