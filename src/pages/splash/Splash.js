import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";


const Splash = ({theme}) => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
 }, [redirect, navigate]);

  if (redirect) {
    navigate("/home");
  }

  return (
    <div className="logo_wrapper">
    <div className="screen" style={{ backgroundColor: "#001C55" }}>
      <LoaderLogo id="logo" theme={theme} />
    </div>
  </div>
  )
}

export default Splash;
