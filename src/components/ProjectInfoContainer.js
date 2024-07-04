import React from "react";
import '../css/PIContainer.css';

const ProjectInfoContainer = () => {
  return (
    <>
      <div className="PICWrapper">
        <div className="PICDetails">
          <div className="PICSection">
            <p className="mainfont">My Role</p>
            <p className="mediumfont">Frontend Developer</p>
          </div>
          <div className="PICSection">
            <p className="mainfont">Team</p>

            {
              true && (
                <div className="teamContainer">
                  <div className="mediumfont teamMember">
                    <img src="" alt="member" />
                    <p>Member 1</p>
                  </div>
                  <div className="mediumfont teamMember">
                    <img src="" alt="member" />
                    <p>Member 2</p>
                  </div>
                  <div className="teamMember mediumfont">
                    <img src="" alt="member" />
                    <p>Member 3</p>
                  </div>
                </div>
              )
            }
            {
              false && (
                <div className='mediumfont'>Individual Own Project</div>
              )
            }
          </div>{" "}

          <div className="PICSection">
            <p className="mainfont">Timeline</p>
            <p className="mediumfont">2Months </p>
          </div>{" "}
        </div>
        <div className="PICOverview">
          <p className="mainfont">Overview</p>
          <p className="mediumfont">
            Test hub waas companion web app originally build to be used to
            stadia game
          </p>
        </div>
      </div >
    </>
  );
};

export default ProjectInfoContainer;
