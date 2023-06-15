import React from "react";
import { Icon } from '@iconify/react';
import "./SoftwareSkill.css";

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
                {logo.fontAwesomeClassname && (
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                )}
                {!logo.fontAwesomeClassname && logo.imageSrc && (
                  <img
                    className="skill-image"
                    style={logo.style}
                    src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                    alt={logo.skillName}
                  />
                )}
                {logo.iconifyClass && (
                  <Icon
                    icon={logo.iconifyClass}
                    style={logo.style}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
