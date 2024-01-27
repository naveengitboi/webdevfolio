import React from 'react'
import '../css/InfoPage.css'
function InfoCardItem(props) {
  return (
    <div className='infoCard'>
        <div className="imageCardContainer">
            <img src={props.content.imgUrl} alt="profile img" />
        </div>
        <div className="profileInfo">
              <p className='mainfont'>{props.content.question} </p>
              <p className='mediumfont'>{props.content.answer}</p>
        </div>
    </div>
  )
}

export default InfoCardItem