import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashPage.css";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

const SplashPage = ({theme}) => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    }, 6000);

    if (redirect) {
      navigate("/home");
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [redirect, navigate]);

  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: "#001C55" }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
};

export default SplashPage;
