import React from 'react'
import { GlowDot } from './ThreeDots'
import '../css/ProjectHeader.css'
import HorizontalLine from './HorizontalLine'
const ProjectHeader = (props) => {
  const { type, typeHeader, typeSubHeader, typeContent } = props.header;
  return (
    <div className="phContainer">
      <div className="phWrapper">
        <HorizontalLine />
        <p className='minifont heading'><GlowDot /> {type}</p>
        <p className='medLargeFont'>{typeHeader}</p>
        <div className='phSection'>

          <p className='mainfont'>{typeSubHeader}</p>
          <p className='mediumfont '>{typeContent}</p>

        </div>
      </div>

    </div>
  )
}


export default ProjectHeader
