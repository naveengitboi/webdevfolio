import React from 'react'
import { MdOutlineArrowDownward } from "react-icons/md";
import '../css/CardItem.css'
import '../css/Introduction.css'
function Introduction() {
    return (
        <div className="introcontainer">
            <div className="introInnerContainer">
                <div className='largefont intro' onMouseMove={(e) => console.log(e)}>
                    <p>
                        <span>Web</span>
                        wizard, <span>graphic </span> virtuoso, and  <span>artistic</span> soul
                    </p>
                </div>
        </div>
       </div>
    )
}

export default Introduction