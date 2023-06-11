import "./TopButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const TopButton = ({ theme }) => {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  const onMouseEnter = () => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = theme.body;
    topButton.style.backgroundColor = theme.text;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = theme.body;
    arrow.style.backgroundColor = theme.text;
  };

  const onMouseLeave = () => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = theme.text;
    topButton.style.backgroundColor = theme.body;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = theme.text;
    arrow.style.backgroundColor = theme.body;
  };

  return (
    <div
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <FontAwesomeIcon icon={faArrowUp} id="arrow" />
    </div>
  );
};

export default TopButton;
