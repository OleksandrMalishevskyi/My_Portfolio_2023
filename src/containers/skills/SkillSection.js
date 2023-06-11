import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Slide } from "react-awesome-reveal";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

const GetSkillSvg = (props) => {
  if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
};

const SkillSection = theme => {
  return (
    <div>
      {skills.data.map((skill, index) => {
        return (
          <div key={index} className="skills-main-div">
            <Slide direction="left" duration={2000} delay={0} triggerOnce>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Slide>

            <div className="skills-text-div">
              <Slide direction="right" duration={1000} delay={0} triggerOnce>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Slide>

              <Slide direction="right" duration={1500} delay={0} triggerOnce>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Slide>

              <Slide direction="right" duration={2000} delay={0} triggerOnce>
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
              </Slide>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SkillSection;
