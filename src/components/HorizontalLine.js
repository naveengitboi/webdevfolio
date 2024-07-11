import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
 
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, ${props => props.color || "var(--gray_medium_color)"}, transparent);
`

const HorizontalLine = (props) => {

  const color = props.color ? props.color : "var(--gray_medium_color)"

  return (

    <Line color={color}></Line>
  )
}


export default HorizontalLine
