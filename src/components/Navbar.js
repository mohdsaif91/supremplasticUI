import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="site-wrap" id="home-section">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            <li className="active">
              <a href="index.html" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="about.html" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="services.html" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="blog.html" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="contact.html" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3 ">
              <div className="site-logo">
                <NavLink to="index.html" className="font-weight-bold">
                  Supreme Plastic
                </NavLink>
              </div>
            </div>
            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none">
                <NavLink
                  to="#"
                  className="text-primary site-menu-toggle js-menu-toggle py-5"
                >
                  <span className="icon-menu h3 text-primary"></span>
                </NavLink>
              </span>
              <nav
                className="site-navigation text-right ml-auto d-none d-lg-block"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li className="active">
                    <NavLink activeClassName="active-link" to="/" active>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service" className="nav-link">
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactUs" className="nav-link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
