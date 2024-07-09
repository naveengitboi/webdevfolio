import React from 'react'
import { GiClubs } from 'react-icons/gi'
import '../css/BlockCard.css'
import { BsStars } from "react-icons/bs";
const ProjectImage = ({ img }) => {
  return (
    <div className='imageWrapper'>
      <img src={img.img} alt={img.text} />

      <p className='minifont bottomTextImage'>

        {img.text}
        <span className='svgSpan'>
          <BsStars></BsStars>
        </span>
      </p>
    </div >
  )
}


export default ProjectImage
