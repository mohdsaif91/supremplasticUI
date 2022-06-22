import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import { adminNav, clientNav } from "../util";
import LogoutIcon from "../image/icon/logout.png";

function NavbarElement() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  const navItem = pathname.includes("admin") ? adminNav : clientNav;

  return (
    <Navbar
      expand="lg"
      bg={`${pathname.includes("admin") ? "dark" : "light"}`}
      className="ml-auto"
    >
      <Navbar.Brand href="#home">
        <div className="site-logo " onDoubleClick={() => navigate("/Login")}>
          <NavLink to="/" className="font-weight-bold ml-4">
            Supreme Plastic
          </NavLink>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav ml-3"
        className={`${
          pathname.includes("admin") && "d-flex justify-content-right"
        }`}
      >
        <Nav justify={true} className="me-auto">
          {navItem.map((m) => (
            <Nav.Link href={`#${m.text}`}>
              <NavLink
                className={`${pathname === m.text && "text-primary"} nav-link`}
                to={m.to}
              >
                {m.text}
              </NavLink>
            </Nav.Link>
          ))}
        </Nav>
        {pathname.includes("admin") && (
          <div className="logout-nav-item">
            <img
              className="logout-icon mr-2"
              onClick={() => navigate("/")}
              src={LogoutIcon}
            />
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
    // <div className="site-wrap" id="home-section">
    //   {/* <div className="site-mobile-menu site-navbar-target">
    //     <div className="site-mobile-menu-header">
    //       <div className="site-mobile-menu-close mt-3">
    //         <span className="icon-close2 js-menu-toggle"></span>
    //       </div>
    //     </div>
    //     <div className="site-mobile-menu-body">
    //       <ul className="site-nav-wrap">
    //         <li className="active">
    //           <a href="index.html" className="nav-link">
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a href="about.html" className="nav-link">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="services.html" className="nav-link">
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a href="blog.html" className="nav-link">
    //             Blog
    //           </a>
    //         </li>
    //         <li>
    //           <a href="contact.html" className="nav-link">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div> */}
    //   <header className="site-navbar site-navbar-target" role="banner">
    //     <div className="container">
    //       <div className="row align-items-center position-relative">
    //         <div className="col-3 ">
    //           <div
    //             className="site-logo"
    //             onDoubleClick={() => navigate("/Login")}
    //           >
    //             <NavLink to="/" className="font-weight-bold">
    //               Supreme Plastic
    //             </NavLink>
    //           </div>
    //         </div>
    //         <div className="col-9  text-right">
    //           <span className="d-inline-block d-lg-none">
    //             <NavLink
    //               to="#"
    //               className="text-primary site-menu-toggle js-menu-toggle py-5"
    //             >
    //               <span className="icon-menu h3 text-primary"></span>
    //             </NavLink>
    //           </span>
    //           <nav
    //             className="site-navigation text-right ml-auto d-none d-lg-block"
    //             role="navigation"
    //           >
    //             <ul className="site-menu ">
    //               <li className="active">
    //                 <NavLink activeClassName="active-link" to="/" active>
    //                   Home
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink to="/about" className="nav-link">
    //                   About
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink to="/service" className="nav-link">
    //                   Services
    //                 </NavLink>
    //               </li>
    //               <li>
    //                 <NavLink to="/contactUs" className="nav-link">
    //                   Contact
    //                 </NavLink>
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </div>
  );
}

export default NavbarElement;
