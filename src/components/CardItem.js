import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineLink } from "react-icons/md";
import '../css/CardItem.css'
function CardItem(props) {
    const {proj, projDescription, skillsUsed, projLink, imgUrl, linkType} = props.content
  return (
    <div className='cardContainer'>
        <div className="innerContainer">
            <div className="topContent">
                <div className="projDetails">
                      <h1 className='mainfont'>{proj}</h1>
                      <p className='mediumfont'>{projDescription}</p>
                </div>

                <div className="arrowBtn">
                      <a href={projLink} target='_blank' rel="noreferrer">{linkType === "server" ? <MdOutlineLink/> : <IoLogoGithub/>}</a>
                </div>
                
            </div>

            <div className="info">
                <img src={imgUrl} alt={proj} />
            </div>
        </div>
        <div className="bottomInfoContainer">
              <p className='minifont'>Skills Used:- &nbsp;&nbsp;&nbsp; [</p>
            <ul className='minifont'>
                {
                    skillsUsed.map((skill) => (
                        <li>{skill}</li>
                    ))
                }
            </ul>]
        </div>
    </div>
  )
}

export default CardItem