// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";

export default function Main(props) {
  const routeResult = useRoutes([
    { path: "/", element: <Splash /> },
    { path: "/home", element: <Home theme={props.theme} /> },
    { path: "/experience", element: <Experience /> },
    { path: "/education", element: <Education /> },
    { path: "/opensource", element: <Opensource /> },
    { path: "/contact", element: <Contact /> },
    { path: "/splash", element: <Splash /> },
    { path: "/projects", element: <Projects /> },
    { path: "*", element: <Error404 /> },
  ]);

  return (
    <>
      {routeResult}
    </>
  );
}


