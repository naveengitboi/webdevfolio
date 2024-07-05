import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
 
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gray_medium_color),transparent);
`

const HorizontalLine = () => {
  return (

    <Line></Line>
  )
}


export default HorizontalLine
