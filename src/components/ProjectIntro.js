import React from "react";
import '../css/ProjectIntro.css'
import styled from 'styled-components';

const BGLight = styled.div`
  position: absolute;
  top:-50%;
  left:0%;
  tranform:translateX(-50%);
  width:100%;
  height:90%;
  background:radial-gradient(${props => props.color || "transparent"}, transparent );
  border-radius: 50 %;
  z - index: -5;
filter: blur(2px);
`
const ProjectIntro = (props) => {
  const { name, description, img, bgColor } = props.intro
  return (
    <div className="projectIntroWrapper">
      <p className="medLargeFont projectName">{name}</p>
      <p className="mediumfont">{description}</p>
      <img src={img} alt={description} />
      <BGLight color={bgColor} ></BGLight>
    </div >
  )
}

export default ProjectIntro;
