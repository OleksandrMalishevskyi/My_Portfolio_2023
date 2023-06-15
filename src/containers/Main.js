import { useRoutes } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/ExperienceComponent";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";

const Main = ({theme}) => {
  const routeResult = useRoutes([
    { path: "/", element: <Splash theme={theme} /> },
    { path: "/home", element: <Home theme={theme} /> },
    { path: "/experience", element: <Experience theme={theme} /> },
    { path: "/education", element: <Education theme={theme} /> },
    { path: "/contact", element: <Contact theme={theme} /> },
    { path: "/splash", element: <Splash theme={theme} /> },
    { path: "/projects", element: <Projects theme={theme} /> },
    { path: "*", element: <Error404 theme={theme} /> },
  ]);

  return (
    <>
      {routeResult}
    </>
  );
}

export default Main;