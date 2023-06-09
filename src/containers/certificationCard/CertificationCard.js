import "./CertificationCard.css";
import { Fade } from "react-awesome-reveal";

const CertificationCard = ({ theme, certificate }) => {
  return (
    <Fade direction="down" duration={2000} delay={500} triggerOnce>
      <div className="cert-card">
        <div className="content">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assests/images/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            </div>
            <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: theme.body }}>
                Certificate
              </h3>
            </div>
          </a>
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: theme.text }}>
            {certificate.title}
          </h2>
          <h3
            className="cert-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>
      </div>
    </Fade>
  );
};

export default CertificationCard;
