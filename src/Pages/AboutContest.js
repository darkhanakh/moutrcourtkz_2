import React from "react";
import "../Style/AboutContest.css";
import { Link } from "react-router-dom";
import reglament from "../Files/reglament.pdf";
import form1 from "../Files/form1.docx";
import form2 from "../Files/form2.docx";
import judging from "../Files/judging.docx";
import { useTranslation } from "react-i18next";

function AboutContest() {
  const { t } = useTranslation();
  return (
    <div className="aboutcontest">
      <h4>Moot Court Kazakhstan for High School</h4>
      <p>{t("about-introduction")}</p>
      <h5>{t("contest-idea")}</h5>
      <div className="about-ideas-container">
        <p>{t("contest-idea-p1")}</p>
        <p>{t("contest-idea-p2")}</p>
      </div>
      <p>{t("contest-idea-p3")}</p>
      <p>{t("contest-idea-p4")}</p>
      <p>{t("contest-idea-p5")}</p>
      <p>{t("contest-idea-p7")}</p>
      <p>{t("contest-idea-p6")}</p>
      <h5>{t("contest-steps")}</h5>
      <p>{t("contest-steps-p1")}</p>
      <p>{t("contest-steps-p2")}</p>
      <p>{t("contest-steps-p3")}</p>
      <p>{t("contest-steps-p4")}</p>
      <p>{t("contest-steps-p5")}</p>
      <p>{t("contest-steps-p6")}</p>
      <h5>{t("winner-and-nominations")}</h5>
      <p>{t("winner-and-nominations-p1")}</p>
      <p>{t("winner-and-nominations-p2")}</p>
      <p>{t("winner-and-nominations-p3")}</p>
      <p>{t("winner-and-nominations-p4")}</p>
      <h5>{t("additional-prizes")}</h5>
      <p>{t("additional-prizes-p1")}</p>
      <p>{t("additional-prizes-p2")}</p>
      <p>{t("additional-prizes-p3")}</p>
      <p>{t("additional-prizes-p4")}</p>
      <p>{t("additional-prizes-p5")}</p>
      <div className="file-link-container">
        <h5 style={{ paddingTop: 0 }}>{t("about-title")}</h5>
        <Link className="file-link" to={reglament} target="_blank" download>
          {t("about-link1")}
        </Link>
        <Link className="file-link" to={form1} target="_blank" download>
          {t("about-link2")}
        </Link>
        <Link className="file-link" to={form2} target="_blank" download>
          {t("about-link3")}
        </Link>
        <Link className="file-link" to={judging} target="_blank" download>
          {t("about-link4")}
        </Link>
      </div>
    </div>
  );
}

export default AboutContest;
