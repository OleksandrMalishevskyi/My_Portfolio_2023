import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "react-awesome-reveal";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = ({theme}) => {

    return (
      <div className="error-main">
        <Header theme={theme} />
        <div className="error-class">
          <Fade duration={1000} delay={500} direction="left" triggerOnce>
            <h1>Woops</h1>
            <h1 className="error-404">404</h1>
            <p>The requested page is unavailable at the moment!</p>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              Go Home
            </Link>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }


export default Error