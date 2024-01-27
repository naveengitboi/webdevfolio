import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineLink } from "react-icons/md";
import '../css/CardItem.css'
import { Link } from 'react-router-dom';
function CardItem(props) {
    const {proj, projDescription, skillsUsed, projLink, imgUrl} = props.content
  return (
    <div className='cardContainer'>
        <div className="innerContainer">
            <div className="topContent">
                <div className="projDetails">
                      <h1 className='mainfont'>{proj}</h1>
                      <p className='mediumfont'>{projDescription}</p>
                </div>

                <div className="arrowBtn">
                      <Link><IoLogoGithub /></Link>
                </div>
                
            </div>

            <div className="info">
                <img src={imgUrl} alt={proj} />
            </div>
        </div>
        <div className="bottomInfoContainer">
            <ul className='smallfont'>
                {
                    skillsUsed.map((skill) => (
                        <li>{skill}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default CardItem