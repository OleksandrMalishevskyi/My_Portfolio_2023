import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Slide } from "react-awesome-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

const Contact = (props) => {

    return (
      <div className="contact-main">
        <Header theme={props.theme} />
        <div className="basic-contact">
            <div className="contact-heading-div">
            <Slide direction="left" duration={1500} delay={0} triggerOnce>
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              </Slide>
              <Slide direction="right" duration={1500} delay={0} triggerOnce>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: props.theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: props.theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={props.theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={props.theme}
                  />
                </div>
              </div>
              </Slide>
            </div>
          

          <Slide direction="down" duration={1500} delay={0} triggerOnce>
            <div className="address-heading-div">

              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: props.theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: props.theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: props.theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: props.theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={props.theme}
                  />
                </div>
              </div>
              <div className="contact-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <AddressImg theme={props.theme} />
              </div>
            </div>
          </Slide>
        </div>
        <Footer theme={props.theme} onToggle={props.onToggle} />
        <TopButton theme={props.theme} />
      </div>
    );
  }


export default Contact;
