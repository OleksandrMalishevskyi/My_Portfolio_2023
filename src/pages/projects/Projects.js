import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-awesome-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const Projects = ({theme}) => {
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
            <div className="projects-heading-div">
            <Fade direction="right" duration={2000} delay={500} triggerOnce>
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
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
          {ProjectsData.data.map((repo, index) => {
            return <GithubRepoCard key={index} repo={repo} theme={theme} />;
          })}
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
  }

export default Projects;
