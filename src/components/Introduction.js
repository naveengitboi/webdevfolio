import React from 'react'
import { MdOutlineArrowDownward } from "react-icons/md";
import '../css/CardItem.css'
import '../css/Introduction.css'
import { IoIosGitCompare } from "react-icons/io";
function Introduction(props) {
    return (
        <div className="introcontainer">
            <div className="introHeader">
                <div className="dots">
                    <span className='red'></span>
                    <span className='orange'></span>
                    <span className='green'></span>
                </div>
                <div className='leftIconHeader'>
                    <IoIosGitCompare />
                </div>
            </div>
            <div className="introInnerContainer">
                <div className='largefont intro'>
                    <p>
                        <span onMouseOver={(e) => props.cursorsizeFunc(e)} onMouseLeave={(e) => props.cursorsizeLeaveFunc(e)} >Web</span>
                        wizard, <span onMouseOver={(e) => props.cursorsizeFunc(e)} onMouseLeave={(e) => props.cursorsizeLeaveFunc(e)} >graphic </span> virtuoso, and  <span onMouseOver={(e) => props.cursorsizeFunc(e)} onMouseLeave={(e) => props.cursorsizeLeaveFunc(e)} >artistic</span> soul
                    </p>
                </div>

                <div className="arrowDown"><MdOutlineArrowDownward /></div>
            </div>

        </div>
    )
}

export default Introduction