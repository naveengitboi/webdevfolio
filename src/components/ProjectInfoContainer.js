import React, { useEffect, useState } from "react";
import '../css/PIContainer.css';
import { useParams } from "react-router-dom";
import { projectsInfo } from '../data'
import { GreenDot, OrangeDot } from './ThreeDots'
const ProjectInfoContainer = () => {
  const [loaded, setLoaded] = useState(false);
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

  const work = pDetails.moreAboutProject
  return (
    <>
      {loaded &&
        <div className="PICWrapper">
          <div className="PICDetails">
            <div className="PICSection">
              <p className="mediumfont highlightContent">My Role</p>
              <p className="mediumfont"><span className="highlightContent">{work.role.type} </span> {work.role.context}</p>
            </div>
            <div className="PICSection">
              <p className="mediumfont highlightContent">Team</p>

              {
                work.isTeam && (

                  <div className="teamContainer">
                    {
                      work.team.map((mate, idx) => {
                        return (
                          <div key={idx} className="mediumfont teamMember">
                            <p>{mate.teamate}  -- {mate.twork}</p>
                          </div>

                        )
                      })
                    }
                  </div>
                )
              }
              {
                !work.isTeam && (

                  <div className='mediumfont'>{work.team}</div>
                )
              }
            </div>{" "}

            <div className="PICSection">
              <p className="mediumfont highlightContent">Timeline</p>
              <p className="mediumfont">{work.timeline}</p>
            </div>{" "}
          </div>
          <div className="PICOverview ">
            <div className="PICSection">
              <p className="mediumfont  highlightContent">Overview</p>
              {
                work.overview.map((para, idx) => {
                  return (
                    <p key={idx} className="workOverview mediumfont">
                      {para}
                    </p>

                  )
                })
              }
            </div>
            <div className="PICSection">
              <p className="mediumfont highlightContent statusChecker">Status {work.completed ? (<GreenDot />) : (<OrangeDot />)} </p>
              <p className="mediumfont">{work.progress}</p>
            </div>
          </div>
        </div >
      }
    </>
  );
};

export default ProjectInfoContainer;
