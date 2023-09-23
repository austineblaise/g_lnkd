import React, { useEffect } from "react";
import SplashPage from "./SplashLoader/SplashPage";

const Splash = ({ finishLoading }:any) => {
  useEffect(() => {
    const delay = 4000;
    const loadingTimer = setTimeout(() => {
      finishLoading();
    }, delay);

    return () => clearTimeout(loadingTimer);
  }, [finishLoading]);

  return (
    <div style={{ overflow: "hidden" }}>
      <SplashPage />
    </div>
  );
};

export default Splash;
