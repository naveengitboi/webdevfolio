import React from 'react'
import { motion } from 'framer-motion'
import { removeCursor, cursorType } from '../Redux/CursorSlice';
import { useDispatch } from 'react-redux';

function MWorkLink({proj}) {
  const dispatch = useDispatch()
  return (
    <a href="linka" target="_blank">
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
              proj.project.split('').map((l, idx) => {
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
                {proj.desc}
          </p>
          <p className='smallfont'>
            {
              proj.learnings.map((item) => {
                return (
                  <span>{item},  </span>
                )
              })
            }
          </p>
        </div>

        <motion.img src={proj.image} alt="mine"
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
    </a>
  )
}

export default MWorkLink
