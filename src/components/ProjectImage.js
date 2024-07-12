import React from 'react'
import { GiClubs } from 'react-icons/gi'
import '../css/BlockCard.css'
import { BsStars } from "react-icons/bs"; const ProjectImage = ({ img }) => {
  const { isVideo = false } = img
  return (
    <div className='imageWrapper'>
      {!isVideo ? (<img src={img.img} alt={img.text} />) : (
        <div className='bgImageVideo'>
          <img src={'/assets/bg.png'} />
          <video className='iwVideo' autoPlay loop >
            <source type='video/mp4' src={img.img} />
          </video>
        </div>
      )

      }

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
