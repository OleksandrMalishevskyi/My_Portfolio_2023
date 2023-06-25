
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import SplashPage from "../pages/splash/SplashPage";
import EducationPage from "../pages/education/EducationPage";
import ExperiencePage from "../pages/experience/ExperiencePage";
import ContactPage from "../pages/contact/ContactPage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import Error404 from "../pages/errors/error404/Error";


const Main = ({theme}) => {
  const routeResult = useRoutes([
    { path: "/", element: <SplashPage theme={theme} /> },
    { path: "/home", element: <HomePage theme={theme} /> },
    { path: "/experience", element: <ExperiencePage theme={theme} /> },
    { path: "/education", element: <EducationPage theme={theme} /> },
    { path: "/contact", element: <ContactPage theme={theme} /> },
    { path: "/splash", element: <SplashPage theme={theme} /> },
    { path: "/projects", element: <ProjectsPage theme={theme} /> },
    { path: "*", element: <Error404 theme={theme} /> },
  ]);

  return (
    <>
      {routeResult}
    </>
  );
}

export default Main;