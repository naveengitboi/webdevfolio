import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { removeCursor, cursorType } from '../Redux/CursorSlice';
import { useDispatch } from 'react-redux';

function MWorkLink() {
  const dispatch = useDispatch()
  return (
    <Link to='/project/1'>
      <motion.div
        initial="initial"
        whileHover={"whileHover"}
        className="mwProjLinkContainer"
        onMouseEnter={() => dispatch(cursorType('projectView'))}
        onMouseLeave={() => {
          dispatch(removeCursor())
        }}
        onClick={() => dispatch(removeCursor())}
        >
        <div className="mwProjContent">
          <motion.span className='medLargeFont'
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.05,
              delayChildren: 0.05,
            }}
          >
            {
              'Hello World'.split('').map((l, idx) => {
                return (
                  <motion.span key={idx}
                    variants={{
                      initial: { x: 0 },
                      whileHover: { x: 16 },
                    }}
                    transition={{ type: "spring" }}
                  >
                    {l}
                  </motion.span>
                )
              })
            }
          </motion.span>
          <p className='smallfont'>
            of X and Y offsets from the element, blur radius, and color.
          </p>
        </div>



        <motion.img src="/assets/mine.jpg" alt="mine"
          variants={{
            initial: {
              scale: 0,
              opacity: 0,
              rotate: 10,
            },
            whileHover: {
              scale: 1,
              opacity: 1,
              rotate: 5,
            },
          }}
          transition={{ duration: 1, type: "spring" }}
        />


      </motion.div>
    </Link>
  )
}

export default MWorkLink