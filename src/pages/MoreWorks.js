import React from 'react'
import MWorkLink from '../components/MWorkLink'
import '../css/MWorksPage.css'
import {moreWorks} from '../MWorksData' 
function MoreWorks()  {
  return (
    <div className='moreWorksPage'>

      {
         moreWorks.map((proj) => {
          return (
          <MWorkLink proj={proj} />
          )
        })
      }


    </div>
  )
}

export default MoreWorks
