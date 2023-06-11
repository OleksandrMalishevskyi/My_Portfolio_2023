import "./Certifications.css";
import { Fade } from "react-awesome-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

const Certifications = (theme) => {
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade direction="down" duration={2000} delay={500} triggerOnce>
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert, index) => {
          return <CertificationCard key={index} certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Certifications;
