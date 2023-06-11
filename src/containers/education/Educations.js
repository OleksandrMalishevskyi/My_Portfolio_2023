import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

const Educations = theme => {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade direction="left" duration={1500} delay={1500} triggerOnce>
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
      {degrees.degrees.map((degree, index) => {
          return <DegreeCard key={index} degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Educations;
