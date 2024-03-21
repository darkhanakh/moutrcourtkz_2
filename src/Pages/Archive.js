import { matchRoutes, useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./../Style/ArchiveContainer.css";

const routes = [{ path: "archive/old" }, { path: "archive/new" }];

const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return route.path;
};

const Archive = () => {
  const { t } = useTranslation();

  const currentPath = useCurrentPath();

  return (
    <div className="archive_container">
      <div className="archive_container-buttons">
        <Link
          to="old"
          className={`archive_container-link ${
            currentPath === "archive/old" ? "active" : ""
          }`}
        >
          {t("old-archive-date")}
        </Link>
        <Link
          to="new"
          className={`archive_container-link ${
            currentPath === "archive/new" ? "active" : ""
          }`}
        >
          {t("new-archive-date")}
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Archive;
