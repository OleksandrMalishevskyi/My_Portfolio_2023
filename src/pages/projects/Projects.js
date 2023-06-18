import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-awesome-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import ProjectCard from "../../containers/projectCard/ProjectCard";
import projectcards from "../../containers/projectCard/ProjectCardData";

const Projects = ({ theme }) => {
  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <div className="projects-heading-div">
          <Fade direction="right" duration={2000} delay={500} triggerOnce>
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
          </Fade>
          <Fade direction="left" duration={2000} delay={500} triggerOnce>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="repo-cards-div-main">
        {projectcards.data.map((project, index) => (
          <ProjectCard
            theme={theme}
            key={index}
            title={project.title}
            description={project.description}
            videoId={project.videoId}
            technologies={project.technologies}
            githubLink={project.githubLink}
            renderLink={project.renderLink}
          />
        ))}
      </div>

      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Projects;
