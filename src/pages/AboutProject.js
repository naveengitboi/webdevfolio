import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProjectInfoContainer from "../components/ProjectInfoContainer"
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
      <ProjectInfoContainer work={pDetails.moreAboutProject} loaded={loaded} />
    </div>
  )
}


export default AboutProject;
