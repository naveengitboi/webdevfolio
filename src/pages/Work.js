import React from 'react'
import CardItem from '../components/CardItem'
import { projectsInfo } from '../data'
function Work() {
  return (
    <div className='workContainer'>
        {
            projectsInfo.map((proj, index) => (
                <CardItem key={index} content={proj}/>
            ))
        }
    </div>
  )
}

export default Work