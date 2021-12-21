import React from 'react';
import IconText from './IconText';
import Button from '../components/Button/Button';

function Header(props) {

  // const getNavLinkClass = path => {
  //   return props.location.pathname === path ? " active" : "";
  // }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <IconText className="navbar-brand" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className={`nav-item`}>
                <Button className="nav-link" type='link' href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item`}>
                <Button className="nav-link" type='link' href="/browse-by">
                  Browse by
                </Button>
              </li>
              <li className={`nav-item`}>
                <Button className="nav-link" type='link' href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item`}>
                <Button className="nav-link" type='link' href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
