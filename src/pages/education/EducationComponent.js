import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-awesome-reveal";

const Education = ({ theme }) => {
  return (
    <div className="education-main">
      <Header theme={theme} />
      <div className="basic-education">
        <Fade direction="left" duration={2000} delay={500} triggerOnce>
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifcations
              </h3>
            </div>
          </div>
        </Fade>
        <Educations theme={theme} />
        {certifications.certifications.length > 0 ? (
          <Certifications theme={theme} />
        ) : null}
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Education;
