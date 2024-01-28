import React from 'react'
import { MdOutlineArrowDownward } from "react-icons/md";
import '../css/CardItem.css'
import '../css/Introduction.css'
function Introduction(props) {
    return (
        <div className="introcontainer">
            <div className="introInnerContainer">
                <div className='largefont intro'>
                    <p>
                        <span onMouseOver={(e) => props.cursorsizeFunc(e)} onMouseLeave={(e) => props.cursorsizeLeaveFunc(e)} >Web</span>
                        wizard, <span onMouseOver={(e) => props.cursorsizeFunc(e)} onMouseLeave={(e) => props.cursorsizeLeaveFunc(e)} >graphic </span> virtuoso, and  <span onMouseOver={(e) => props.cursorsizeFunc(e)} onMouseLeave={(e) => props.cursorsizeLeaveFunc(e)} >artistic</span> soul
                    </p>
                </div>
        </div>
       </div>
    )
}

export default Introduction