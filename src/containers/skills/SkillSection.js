import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

const GetSkillSvg = ({fileName, theme}) => {
  if (fileName === "FullStackImg")
    return <FullStackImg theme={theme} />;
  else if (fileName === "CloudInfraImg")
    return <CloudInfraImg theme={theme} />;
  return <DesignImg theme={theme} />;
};

const SkillSection = ({theme}) => {
  return (
    <div>
      {skills.data.map((skill, index) => {
        return (
          <div key={index} className="skills-main-div">
            <Fade direction="left" duration={2000} delay={1000} triggerOnce>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>

            <div className="skills-text-div">
              <Fade direction="right" duration={2000} delay={1000} triggerOnce>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>

              <Fade direction="right" duration={2000} delay={1000} triggerOnce>
                <SoftwareSkill logos={skill.languages} />
              </Fade>

              <Fade direction="right" duration={2000} delay={1000} triggerOnce>
                <div>
                {skill.skills.map((skillSentence, skillIndex) => {
                    return (
                      <p
                      key={`skill-${index}-${skillIndex}`}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SkillSection;
