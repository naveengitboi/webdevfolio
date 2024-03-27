import React from 'react'
import Introduction from '../components/Introduction'
import Work from './Work'
import { BsRobot } from "react-icons/bs";
import ThreeDots from '../components/ThreeDots';
import { Link } from 'react-router-dom';
import { LiaArrowRightSolid } from "react-icons/lia";

import '../css/Home.css'

const dontCheckText = '⚠️ Caution: Resist the urge to click without verification. Your cyber safety is our top priority'

const attention = dontCheckText.split(' ')

function Home(props) {
  return (
    <>
      <Introduction />
      <Work />
      <div className="moreWorks gapBwSection">
        <div className="tabHeader">
          <BsRobot />
          <a href='https://github.com/naveengitboi' target='_blank' className='mediumfont'>naveengitboi</a>
          <ThreeDots />
        </div>

        <div className='moreWorksMainContainer'>
          <div className="attenstionScroller">
            {
              [...attention, ...attention].map((l, idx) => {
                return (
                  <p className='mainfont' key={idx}>{l}</p>
                )
              })
            }
          </div>
          <div className="mwDetailsContainer">
            <h1 className='medLargeFont'>
              <span>Warning:</span> Dive into the Depths of My Projects at Your Own Risk! 🚨
            </h1>
            <div className='moreWorksLink mainfont'>
              <Link to='/moreworks' >
                Check Out
              </Link>
              <LiaArrowRightSolid />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home