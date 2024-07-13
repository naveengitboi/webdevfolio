import { BsRobot } from "react-icons/bs";
import ThreeDots from '../components/ThreeDots';
import { Link } from 'react-router-dom';
import { LiaArrowRightSolid } from "react-icons/lia";



const AttentionScroller = () => {

  // const dontCheckText = '⚠️ Caution: Resist the urge to click without verification. Your cyber safety is our top priority'
  // const attention = dontCheckText.split(' ')
  //
  return (

    <div className="moreWorks gapBwSection">
      <div className="tabHeader">
        <BsRobot />
        <a href='https://github.com/naveengitboi' target='_blank' className='mediumfont' rel="noreferrer">naveengitboi</a>
        <ThreeDots />
      </div>

      <div className='moreWorksMainContainer'>
        {/* <div className="attenstionScroller"> */}
        {/*   { */}
        {/*     [...attention, ...attention].map((l, idx) => { */}
        {/*       return ( */}
        {/*         <p className='mainfont' key={idx}>{l}</p> */}
        {/*       ) */}
        {/*     }) */}
        {/*   } */}
        {/* </div> */}
        <div className="mwDetailsContainer">
          <h1 className='medLargeFont'>
            Checkout more projects and learnings of mine 
          </h1>
          <div className='moreWorksLink mainfont'>
            <Link to='/moreworks' >
              Check Out
              <LiaArrowRightSolid />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}


export default AttentionScroller;
