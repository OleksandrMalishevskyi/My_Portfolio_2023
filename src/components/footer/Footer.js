import "./Footer.css";
import { Fade } from "react-awesome-reveal";
import { greeting } from "../../portfolio.js";

const Footer = ({theme}) => {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
       
      </Fade>
    </div>
  );
}

export default Footer