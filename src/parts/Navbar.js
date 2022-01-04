import React from "react";
import IconText from "./IconText";
import Button from "../components/Button/Button";
// import { Fade } from "react-awesome-reveal";

function Navbar(props) {
  const getNavLinkClass = (path) => {
    return props.location === path ? " active" : "";
  };

  if (props.isCentered) {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        id="navbar"
        role="navigation"
      >
        <div className="container">
          <Button className="brand-text-icon mx-auto" href="" type="link">
            Vaca<span className="text-gray-900">stay.</span>
          </Button>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      id="navbar"
      role="navigation"
    >
      <div className="container">
        <>
          <IconText className="navbar-brand" link="/" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse by
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </>
      </div>
    </nav>
  );
}

export default Navbar;
