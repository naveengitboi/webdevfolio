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
  background:radial-gradient(#073F6E, transparent);
  border-radius:50%;
  z-index:-5;
  filter:blur(2000px);

`


const ProjectIntro = () => {
  return (
    <div className="projectIntroWrapper">
      <BGLight className="bgLight"></BGLight>
      <p className="medLargeFont projectName">Wallet Manager</p>
      <p className="mediumfont">A Money Manager app - 2024</p>
      <img src='/dummy' alt='money manager app' />
    </div>
  )
}

export default ProjectIntro;
