import React from 'react'
import Introduction from '../components/Introduction'
import Work from './Work'

function Home(props) {
  return (
        <>
      <Introduction cursorsizeFunc={props.cursorSizeUpdate} cursorsizeLeaveFunc={props.cursorLeaveUpdate} />
            <Work/>
        </>
  )
}

export default Home