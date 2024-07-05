import React, { useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import viewWork from './viewWork.svg'
import dragCursor from './Drag.svg'
import { useSelector } from 'react-redux'
import { removeCursor, cursorType } from '../Redux/CursorSlice'
const cSizeDefault = 20
const cSizeHover = 80
const cursorVarient = {
    default: {
        width: cSizeDefault,
        height: cSizeDefault,
        backgroundImage: `url(none)`
    },
    projectView: {
        width: cSizeHover,
        height: cSizeHover,
        backgroundImage: `url(${viewWork})`
    },
    drag: {
        width: cSizeHover,
        height: cSizeHover,
        backgroundImage: `url(${dragCursor})`
    }
}
function Cursor() {

    const cursorTypeAction = useSelector((state) => state.changeCursor.value)

    const x = useMotionValue(0);
    const y = useMotionValue(0)

    const moveCursor = (e) => {
        x.set(e.clientX);
        y.set(e.clientY)
    }
    useEffect(() => {
        window.addEventListener('mousemove', moveCursor)

        return () => window.removeEventListener('mousemove', moveCursor)
    }, [])

    return (
        <motion.div className='cursor'
            style={{
                left: x,
                top: y
            }}
            variants={cursorVarient}
            animate={cursorTypeAction}
        >

        </motion.div>
    )
}

export default Cursor
