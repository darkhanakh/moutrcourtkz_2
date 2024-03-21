import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimenu: null,
    };
  }

  handleExpand = () => {
    if (this.state.minimenu === false) {
      this.setState({ minimenu: true });
    } else {
      this.setState({ minimenu: false });
    }
  };
  render() {
    const { t, i18n } = this.props;
    const currentLanguage = i18n.language;
    let registrationLink = null;

    if (currentLanguage === "ru") {
      registrationLink = (
        <a
          className="navbar-link"
          style={{ textDecoration: "none" }}
          href="https://forms.gle/BoeN9FgZ7qK1Tiuu8"
        >
          Регистрация
        </a>
      );
    }

    return (
      <div className="navbar">
        <Link id="navbar-home-btn" to="/">
          Moot Court Kazakhstan for High School
        </Link>
        <div
          className={`minimenu ${this.state._color}`}
          onClick={this.handleExpand}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`links ${this.state.minimenu ? `active` : ""}`}>
          <Link
            to="#"
            className="navbar-link"
            style={{ textDecoration: "none" }}
          >
            <Link
              to="#"
              className="navbar-link"
              style={{ textDecoration: "none", padding: "2px" }}
              onClick={() => {
                i18n.changeLanguage("ru");
              }}
            >
              рус |
            </Link>
            <Link
              to="#"
              className="navbar-link"
              style={{ textDecoration: "none", padding: "2px" }}
              onClick={() => {
                i18n.changeLanguage("kz");
              }}
            >
              қаз |
            </Link>
            <Link
              to="#"
              className="navbar-link"
              style={{ textDecoration: "none", padding: "2px" }}
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              eng
            </Link>
          </Link>
          <Link
            to="/about"
            className="navbar-link"
            style={{ textDecoration: "none" }}
            onClick={this.handleExpand}
          >
            {t("navbar-about-comp")}
          </Link>
          <Link
            to="/participation"
            className="navbar-link"
            style={{ textDecoration: "none" }}
            onClick={this.handleExpand}
          >
            {t("navbar-participation")}
          </Link>
          <Link
            to="/organizers"
            className="navbar-link"
            style={{ textDecoration: "none" }}
            onClick={this.handleExpand}
          >
            {t("navbar-about-organizer")}
          </Link>
          <Link
            to="/archive/old"
            className="navbar-link"
            style={{ textDecoration: "none" }}
            onClick={this.handleExpand}
          >
            {t("navbar-archive")}
          </Link>
          {registrationLink}
        </div>
      </div>
    );
  }
}

export default withTranslation()(Navbar);
