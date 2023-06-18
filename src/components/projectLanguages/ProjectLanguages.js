import React, { useState, useEffect } from "react";
import "./ProjectLanguages.css";
import { Icon } from "@iconify/react";

const ProjectLanguages = ({ logos }) => {
  const [hoveredIcons, setHoveredIcons] = useState([]);

  useEffect(() => {
    const animationTimeouts = [];

    hoveredIcons.forEach((isHovered, index) => {
      if (isHovered) {
        const timeoutId = setTimeout(() => {
          setHoveredIcons((prevState) => {
            const newHoveredIcons = [...prevState];
            newHoveredIcons[index] = false;
            return newHoveredIcons;
          });
        }, (index + 1) * 1000);

        animationTimeouts.push(timeoutId);
      }
    });

    return () => {
      animationTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [hoveredIcons]);

  const handleIconHover = (index) => {
    setHoveredIcons((prevState) => {
      const newHoveredIcons = [...prevState];
      newHoveredIcons[index] = true;
      return newHoveredIcons;
    });
  };

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {logos.map((logo, index) => {
            return (
              <li
                key={index}
                className={`software-skill-inline-languages ${
                  hoveredIcons[index] ? "rotate-icon" : ""
                }`}
                name={logo.skillName}
                onMouseEnter={() => handleIconHover(index)}
              >
                <div className="icon-wrapper">
                  <Icon icon={logo.iconifyClass} className="iconify" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectLanguages;
