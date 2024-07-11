import React from 'react'
import '../css/Introduction.css'
function ThreeDots() {
  return (
    <div className="dots">
      <span className='red'></span>
      <span className='orange'></span>
      <span className='green'></span>
    </div>
  )
}


export function RedDot() {
  return (
    <div className='dots'>
      <span className='red'></span>
    </div>
  )
}

export function GreenDot() {
  return (
    <div className='dots'>
      <span className='green'></span>
    </div>
  )
}
export function OrangeDot() {
  return (
    <div className='dots'>    <span className='orange'></span> </div>
  )
}


export function GlowDot() {
  return (
    <span className='glowdot'></span>
  )
}
export default ThreeDots
