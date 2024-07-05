import React from 'react'
import { GlowDot } from './ThreeDots'
import '../css/ProjectHeader.css'
import HorizontalLine from './HorizontalLine'
const ProjectHeader = ({ type, shoutout, subheader, content }) => {
  return (
    <div className="phContainer">
      <div className="phWrapper">
        <HorizontalLine />
        <p className='minifont heading'><GlowDot /> {type}</p>
        <p className='medLargeFont'>{shoutout}</p>
        <div className='phSection'>

          <p className='mainfont'>{subheader}</p>
          <p className='mediumfont '>{content}</p>

        </div>
      </div>

    </div>
  )
}


export default ProjectHeader
