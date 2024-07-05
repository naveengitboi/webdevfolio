import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProjectHeader from '../components/ProjectHeader';
import ProjectInfoContainer from "../components/ProjectInfoContainer"
import ProjectIntro from '../components/ProjectIntro';
import { projectsInfo } from '../data'

const AboutProject = () => {
  const [loaded, setLoaded] = useState(false)
  const [pDetails, setProjectDetails] = useState({});
  const params = useParams()
  const project = params.proj
  useEffect(() => {

    projectsInfo.filter((projectItem) => {
      if (projectItem.proj === project) {
        setProjectDetails(projectItem);
        setLoaded(true)
        return projectItem;

      }
    })
  })
  return (
    <div>
      <ProjectIntro />
      <div className='defaultPadding'>
        <ProjectInfoContainer work={pDetails.moreAboutProject} loaded={loaded} />
        <ProjectHeader type={'Problem'} shoutout={'Take a change in future'} subheader={' The message was loud and clear'} content={'Enabling Bluetooth on the Stadia controllers was the biggest request from the community. Above all else, it was the right thing to do, and an opportunity to overdeliver. '} />


      </div>
    </div>
  )
}


export default AboutProject;
