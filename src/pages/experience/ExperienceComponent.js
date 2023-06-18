import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Experience from "../../containers/experience/Experience";
import ExperienceImg from "./ExperienceImg";
import "./Experience.css";
import { Fade } from "react-awesome-reveal";

const ExperienceComponent = ({ theme }) => {
  return (
    <div className="experience-main">
      <Header theme={theme} />
      <div className="basic-experience">
        <Fade direction="up" duration={2000} delay={500} triggerOnce>
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>

            <div className="experience-heading-text-div">
              <h1 className="experience-heading-text" style={{ color: theme.text }}>
                Experience
              </h1>
              <h3 className="experience-heading-sub-text" style={{ color: theme.text }}>
                Work
              </h3>
            </div>
          </div>
        </Fade>
      </div>
      <Experience theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default ExperienceComponent;
