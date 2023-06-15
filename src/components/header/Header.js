import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink, Link,} from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
// import SeoHeader from "../seoHeader/SeoHeader";

const Header = ({ theme }) => {
  const link = settings.isSplash ? "/splash" : "home";

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/education", label: "Education" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact Me" },
  ];

  return (
    <Fade direction="down" duration={1500} delay={0} triggerOnce>
      {/* <SeoHeader /> */}
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            {navLinks.map((navLink) => (
              <li key={navLink.to}>
                <NavLink
                  to={navLink.to}
                  tag={Link}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) =>
                    (event.target.style.backgroundColor = theme.highlight)
                  }
                  onMouseOut={(event) =>
                    (event.target.style.backgroundColor = "transparent")
                  }
                >
                  {navLink.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </header>
      </div>
    </Fade>
  );
};

export default Header;
