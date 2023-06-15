import "./ProjectLanguages.css";
import { Icon } from '@iconify/react';

const ProjectLanguages = ({ logos }) => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {logos.map((logo, index) => {
            return (
                <li
                  key={index}
                  className="software-skill-inline-languages"
                  name={logo.skillName}
                >
                  <Icon icon={logo.iconifyClass} />
                </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectLanguages;
