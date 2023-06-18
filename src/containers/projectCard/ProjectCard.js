import VideoComponent from "../../components/VideoComponent/VideoComponent";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  videoId,
  technologies = [],
  githubLink,
  renderLink,
  theme,
}) => {
  return (
    <div className="card" style={{ backgroundColor: theme.highlight }}>
      <h2 className="card-title">{title}</h2>
      <div className="card-video">
        <VideoComponent videoId={videoId} />
      </div>

      <p className="card-description">{description}</p>
      <div className="card-technologies">
        <ProjectLanguages logos={technologies} />
      </div>
      <div className="card-content">
        <div className="card-details">
          <div className="card-links">
            <a
              className="card-link"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="card-link"
              href={renderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Render
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
