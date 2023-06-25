import "./Educations.css";
import DegreeCard from "../degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

const Educations = ({theme}) => {
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
        <Fade direction="down" duration={2000} delay={500} triggerOnce>
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }


export default Educations;
