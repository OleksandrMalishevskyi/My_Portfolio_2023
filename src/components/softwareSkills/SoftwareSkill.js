import React from "react";
import "./SoftwareSkill.css";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";

const SoftwareSkill = ({ logos }) => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {logos.map((logo, index) => {
            return (
              <li
                key={index}
                className="software-skill-inline"
                name={logo.skillName}
              >
                <ProjectLanguages logos={[logo]} /> 
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
