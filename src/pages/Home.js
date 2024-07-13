import React from 'react'
import Introduction from '../components/Introduction'
import Work from './Work'

import '../css/Home.css'
import AttentionScroller from './AttentionScroller'


function Home(props) {
  return (
    <div className='defaultPadding'>
      <Introduction />
      <Work />
      <AttentionScroller />
    </div>

  )
}

export default Home
