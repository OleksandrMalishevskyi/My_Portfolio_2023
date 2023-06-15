import "./ExperienceCard.css";
import { Fade, Flip } from "react-awesome-reveal";

const ExperienceCard = ({work, theme}) => {
  console.log(work)
    return (
      <div className="experience-card">    
      {work.logo_path && (
        <Flip direction="horizontal" delay={300}>
          <div className="card-img">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(0.9)",
              }}
              src={require(`../../assests/images/${work.logo_path}`)}
              alt={work.alt_name}
            />
          </div>
        </Flip>
      )}
      <Fade duration={1500} delay={500} direction="right" triggerOnce>
        <div
          className="card-body"
          style={{ width: work.logo_path ? "90%" : "100%" }}
        >
          <div
            className="body-header"
            style={{ backgroundColor: theme.headerColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: theme.text }}>
                {work.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: theme.text }}>
                {work.company}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: theme.text }}>
                {work.duration}
              </h3>
              <h3 className="duration" style={{ color: theme.text }}>
                {work.location}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {work.descriptions.map((exp, index) => {
              return (
                <p
                  key={index}
                  className="content-list"
                  style={{ color: theme.text }}
                >
                  {exp}
                </p>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
     
    );
  }


export default ExperienceCard;
