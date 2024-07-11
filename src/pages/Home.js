import React from 'react'
import Introduction from '../components/Introduction'
import Work from './Work'

import '../css/Home.css'


function Home(props) {
  return (
    <div className='defaultPadding'>
      <Introduction />
      <Work />
    </div>
  )
}

export default Home
