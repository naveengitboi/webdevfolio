import React from "react";
import BlockCard from "./BlockCard";
import ProjectHeader from "./ProjectHeader";
import ProjectImage from "./ProjectImage";
import '../css/ProjectSectionItem.css'
const ProjectSectionItem = (props) => {
  const { project } = props
  console.log(project)
  return (
    <div className="psiContainer">
      {project.isHeaderExist &&
        <ProjectHeader header={project.headerContent} />
      }

      <div className="blocksContainer">
        {
          project.isBlocksExist && project.blocks.map((block, idx) => {
            return (
              <BlockCard key={idx} type={project.blocksColor} extra={project} block={block} acceptNums={true} cnt={idx + 1} />
            )
          })

        }
      </div>

      <div className="imagesContainer">
        {project.isSupportContentExist &&
          project.supportContent.map((content, idx) => {
            console.log(content, idx)

            return content.isImage ? (
              <ProjectImage img={content.data} />
            ) : (<ProjectHeader header={content.data} />)

          })
        }
      </div>


    </div>
  )
}


export default ProjectSectionItem
