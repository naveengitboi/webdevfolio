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
tranform:translateY(-50%);
  background: radial-gradient( ${props => props.color || "gray"},transparent );
filter: blur(500px) opacity(0.40);
`
const SVGIcon = styled.div`
  display:flex;

  justify-content:center;
  align-items:flex-end;
  & > svg{
    fill: ${props => props.color || 'white'};
      font-size:1.85rem;
  }


`
const BlockCardContainer = styled.div`
  border:1px solid var(--border_light_color);
  border-radius: 0.5rem;
  width: 350px;
  width:${props => props.longer ? '100%' : '350px'};
  background-color:#191919;
  margin: 0 1.5rem ;
  position: relative;
  overflow:hidden;
height:${props => props.longer ? '100%' : '380px'};
  padding: ${props => props.longer ? '3rem' : ''};
`

const BlockCard = (props) => {

  const { type, block, acceptNums = false, cnt } = props
  let color;
  bgColors.filter(col => {
    if (col.type === type) {
      color = col.color
      return col
    }
  })


  return (

    <BlockCardContainer className='bcContainer' longer={block.isFinal}>
      <BgLightColor color={color} />
      <HorizontalLine color={color} />
      <div className='bcWrapper'>
        <SVGIcon color={color} >
          {block.icon}

        </SVGIcon>

        <div className="bcDetails">
          {block.isFinal && <p className='mediumfont'>{block.note}</p>}
          <p className={`${block.isFinal ? 'medLargeFont' : 'mainfont'}`}>{block.header}</p>
          {!block.isFinal && <p className='mediumfont'>{block.content}</p>}
        </div>
      </div>

      {acceptNums && block.useNums && <div className='numberDiv'>
        <p className='medLargeFont'>{cnt}</p>
      </div>
      }
    </BlockCardContainer >
  )
}


export default BlockCard
