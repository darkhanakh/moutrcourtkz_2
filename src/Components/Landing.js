import React from "react";
import "../Style/Landing.css";
import { useTranslation } from "react-i18next";

function Landing(props) {
  const { t } = useTranslation();
  return (
    <div className="landing-container">
      <div className="landing-body">
        <div className="landing-body-text">
          <h2>Moot Court Kazakhstan for High School</h2>
          <h6>{t("landing-title")}</h6>
        </div>
        <button onClick={props.scroll}>{t("landing-more")}</button>
      </div>
    </div>
  );
}

export default Landing;
