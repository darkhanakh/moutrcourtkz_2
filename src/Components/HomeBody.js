import React from "react";
import "../Style/HomeBody.css";
import img1 from "../Images/homeImg1.JPG";
import nis_logo from "../Images/NIS_logo.png";
import mootcourt_logo from "../Images/mootcourt_logo.jpeg";
import girlupnis_logo from "../Images/girlupnis_logo.jpeg";
import { useTranslation, withTranslation } from "react-i18next";

function HomeBody({ rf }) {
  const { t } = useTranslation();
  return (
    <div ref={rf} className="homebody-container">
      <div className="sponsor-container">
        <img className="sponsor-img" id="nis" src={nis_logo} alt="nis" />
        <img className="sponsor-img" src={mootcourt_logo} alt="mootcourt" />
        <img
          className="sponsor-img"
          id="girlup"
          src={girlupnis_logo}
          alt="girlupnis"
        />
      </div>

      <h6 className='registration-attention'>
        Внимание!
        Началась регистрация на III Moot Court Kazakhstan for High School, который состоится 27 апреля 2024 года.
        Регистрация команд-участников до 20 апреля 2024 г. (23:59 по казахстанскому времени).
      </h6>


      <h4>{t("whats-mootcourt")}</h4>
      <div>
        <p>{t("whats-mootcourt-p1")}</p>
        <p>{t("whats-mootcourt-p2")}</p>
        <p>{t("whats-mootcourt-p3")}</p>
        <p>{t("whats-mootcourt-p4")}</p>
        <p>{t("whats-mootcourt-p5")}</p>
      </div>
      <img id="homeImg1" src={img1} alt="homeImage" />
      <h4>{t("history-of-mootcourt")}</h4>
      <div>
        <p>{t("history-of-mootcourt-p1")}</p>
        <p>{t("history-of-mootcourt-p2")}</p>
        <p>{t("history-of-mootcourt-p3")}</p>
        <p>{t("history-of-mootcourt-p4")}</p>
        <p>{t("history-of-mootcourt-p5")}</p>
        <p>{t("history-of-mootcourt-p6")}</p>
      </div>
      <h5>{t("famous-mootcourt-trials")}</h5>
      <div className="contest-card-container">
        <p>{t("famous-mootcourt-trials-1")}</p>
        <p>{t("famous-mootcourt-trials-2")}</p>
        <p>{t("famous-mootcourt-trials-3")}</p>
        <p>{t("famous-mootcourt-trials-4")}</p>
        <p>{t("famous-mootcourt-trials-5")}</p>
        <p>{t("famous-mootcourt-trials-6")}</p>
        <p>{t("famous-mootcourt-trials-7")}</p>
      </div>
    </div>
  );
}

export default withTranslation()(HomeBody);
