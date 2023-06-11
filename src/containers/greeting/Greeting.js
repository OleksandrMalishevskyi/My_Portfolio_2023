import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Slide } from "react-awesome-reveal";
import FeelingProud from "./FeelingProud";

const Greeting = ({theme}) => {
  return (
    <Slide direction="up" duration={2000} delay={500} triggerOnce >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
                            <img
											src={require(`../../assests/images/001.jpg`)}
											alt=""
										/>
            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Greeting