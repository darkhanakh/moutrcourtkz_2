import React from "react";

import "./../Style/OldArchive.css";
import "video-react/dist/video-react.css";

import ArchiveSlider from "../Components/ArchiveSlider";
import { useTranslation } from "react-i18next";

const OldArchive = () => {
  const { t } = useTranslation();

  return (
    <div className="archive">
      <h4>{t("new-archive-title")}</h4>
      <p>{t("new-archive-introduction")}</p>
      <p>{t("new-archive-description")}</p>
      <p>
        <h5 className="archive-title">{t("new-judges-title")}</h5>
        <ul>
          <li>{t("new-judges-1")}</li>
          <li>{t("new-judges-2")}</li>
          <li>{t("new-judges-3")}</li>
          <li>{t("new-judges-4")}</li>
        </ul>
      </p>
      <p>
        <h5 className="archive-title">{t("new-winners-title")}</h5>
        <ol>
          <li>{t("new-winners-1")}</li>
          <li>{t("new-winners-2")}</li>
          <li>{t("new-winners-3")}</li>
        </ol>
      </p>
      <p>
        <h5 className="archive-title">{t("new-nominees-title")}</h5>
        <ol>
          <li>{t("new-nominees-1")}</li>
          <li>{t("new-nominees-2")}</li>
          <li>{t("new-nominees-3")}</li>
        </ol>
      </p>
      <p>{t("new-archive-tip")}</p>
      <ArchiveSlider />
    </div>
  );
};

export default OldArchive;
