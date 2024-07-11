import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineLink } from "react-icons/md";
import "../css/CardItem.css";

import { motion } from "framer-motion";
import { removeCursor, cursorType } from "../Redux/CursorSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CardItem(props) {
  const dispatch = useDispatch();
  const { proj, projDescription, skillsUsed, projLink, imgUrl, linkType } =
    props.content;
  return (
    <motion.div
      className="cardContainer "
      onMouseEnter={() => dispatch(cursorType("projectView"))}
      onMouseLeave={() => {
        dispatch(removeCursor());
      }}
      onClick={() => dispatch(removeCursor())}
    >
      <div className="innerContainer">
        <div className="topContent">
          <div className="projDetails">
            <h1 className="mainfont">{proj}</h1>
            <p className="mediumfont">{projDescription}</p>
          </div>

          <div className="arrowBtn">
            <a href={projLink} target="_blank" rel="noreferrer">
              {linkType === "server" ? <MdOutlineLink /> : <IoLogoGithub />}
            </a>
          </div>
        </div>

        <div className="info">
          <img src={imgUrl} alt={proj} />
        </div>
      </div>
      <div className="bottomInfoContainer">
        <p className="minifont">Skills Used:- &nbsp;&nbsp;&nbsp; [</p>
        <ul className="minifont">
          {skillsUsed.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        ]
      </div>
    </motion.div>
  );
}

export default CardItem;
