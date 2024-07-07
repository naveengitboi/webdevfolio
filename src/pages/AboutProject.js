import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProjectInfoContainer from "../components/ProjectInfoContainer"
import ProjectIntro from '../components/ProjectIntro';
import ProjectSectionItem from '../components/ProjectSectionItem';
import { moreAboutProject } from '../data'

const AboutProject = () => {
  const [loaded, setLoaded] = useState(false)
  const [details, setDetails] = useState({});
  const { proj } = useParams()
  const project = proj
  useEffect(() => {

    moreAboutProject.filter((projectItem) => {
      console.log(projectItem)
      if (projectItem.projectName === project) {
        setDetails(projectItem);
        setLoaded(true)
        return projectItem;

      }
    })
  })

  return (

    <div>
      {loaded && <ProjectIntro intro={details.introduction} />
      }
      <div className='defaultPadding'>
        <ProjectInfoContainer work={details.summary} loaded={loaded} />

        {loaded &&
          details.projectDetails.map((eachProject, idx) => {
            return (
              <div className='detailsSection'>
                <ProjectSectionItem project={eachProject} />
              </div>
            )
          })
        }

      </div>
    </div >
  )
}


export default AboutProject;
