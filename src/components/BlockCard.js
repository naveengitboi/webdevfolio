import React from 'react'
import '../css/BlockCard.css'
import styled from 'styled-components'
import HorizontalLine from './HorizontalLine'
const bgColors = [{
  type: 'orange',
  color: '#FFD60A'
}, {
  type: 'green',
  color: '#30DC5B'
}, {
  type: 'red',
  color: "#E62D4E"
}, { type: 'blue', color: '#61DFDB' }]


const BgLightColor = styled.div`
width:100%;
height:100%;
position:absolute;
top:-50%;
  background: radial-gradient( ${props => props.color || "gray"},transparent );
filter: blur(300px) opacity(0.35);
`
const SVGIcon = styled.div`
  & > svg{
    fill: ${props => props.color || 'white'};
      font-size:3rem;
  }

`
const BlockCardContainer = styled.div`
  border:1px solid var(--border_light_color);
  border-radius: 0.5rem;
  width: 350px;
  background-color:#191919;
  display:flex;
  flex-direction:column;
  margin: 0 1.5rem ;
  align-items:center;
  justify-content: center;
  position: relative;
  overflow:hidden;
  min-height: 400px;

`

const BlockCard = (props) => {

  const { type, block, extra, width } = props
  let color;
  bgColors.filter(col => {
    if (col.type === type) {
      color = col.color
      return col
    }
  })

  return (

    <BlockCardContainer className='bcContainer'>
      <BgLightColor color={color} />
      <HorizontalLine color={color} />
      <div className='bcWrapper'>
        <SVGIcon color={color} >
          {block.icon}
          {block.isFinal && <p className='mediumfont'>hello</p>}

        </SVGIcon>

        <p className='mainfont'>{block.header}</p>
        <p className='mediumfont'>{block.content}</p>
      </div>
    </BlockCardContainer >
  )
}


export default BlockCard
