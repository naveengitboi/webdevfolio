import React from 'react'
import CardItem from '../components/CardItem'
import { projectsInfo } from '../data'
import { Link } from 'react-router-dom'
function Work() {
  return (
    <div classname='workcontainer defaultPadding '>
      {
        projectsInfo.map((proj, index) => (
          <Link key={index} to={`/project/${proj.proj}`}> <CardItem content={proj} />
          </Link>
        ))
      }
    </div>
  )
}

export default Work
