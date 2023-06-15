import "./Experience.css";
import ExperienceCard from "../../containers/experienceCard/ExperienceCard";
import { works } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

const Experience = ({theme}) => {
    console.log(works);
      return (
    <div className="main" id="experience">
      <div className="experience-header-div">
        <Fade direction="left" duration={1500} delay={1500} triggerOnce>
          <h1 className="experience-header" style={{ color: theme.text }}>
          A lifelong working path
          </h1>
        </Fade>
      </div>
      <div className="experience-body-div">
      {works.works.map((work, index) => {
        
          return <ExperienceCard key={index} work={work} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
