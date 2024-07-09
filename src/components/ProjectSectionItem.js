import React from "react";
import BlockCard from "./BlockCard";
import ProjectHeader from "./ProjectHeader";
import ProjectImage from "./ProjectImage";
import '../css/ProjectSectionItem.css'
const ProjectSectionItem = (props) => {
  const { project } = props
  console.log(project.isBlocksExist)
  return (
    <div className="psiContainer">
      <ProjectHeader header={project.headerContent} />


      <div className="blocksContainer">
        {
          project.isBlocksExist && project.blocks.map((block, idx) => {
            return (
              <BlockCard key={idx} type={project.blocksColor} extra={project} block={block} />
            )
          })

        }
      </div>

      <div className="imagesContainer">
        {
          project.supportContent.map((content, idx) => {

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
