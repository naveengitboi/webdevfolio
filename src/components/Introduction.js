import React from 'react'
import { MdOutlineArrowDownward } from "react-icons/md";
import '../css/CardItem.css'
import '../css/Introduction.css'
import { IoIosGitCompare } from "react-icons/io";
import '../App.css'
import ThreeDots from './ThreeDots';
function Introduction() {
  return (
    <div className="defaultPadding introcontainer">
      <div className="introHeader">
        <ThreeDots />
        <div className='leftIconHeader'>
          <IoIosGitCompare />
        </div>
      </div>
      <div className="introInnerContainer">
        <div className='largefont intro'>
          <p>
            <span >Web</span>
            wizard, <span>graphic </span> virtuoso, and  <span>artistic</span> soul
          </p>
        </div>

        <div className="arrowDown"><MdOutlineArrowDownward /></div>
      </div>

    </div>
  )
}

export default Introduction
