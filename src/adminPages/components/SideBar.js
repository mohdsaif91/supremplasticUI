import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import { sideBarNav } from "../../util";

export default function SideBar() {
  const { pathname } = useLocation();
  return (
    <div className="admin-side-bar">
      <ul className="list-container">
        {sideBarNav.map((m) => (
          <Nav.Link href={`#${m.text}`}>
            <NavLink
              className={`${pathname === m.to && "text-primary"} nav-link`}
              to={m.to}
            >
              <li className="list-item">
                {m.text}
                {m.icon}
              </li>
            </NavLink>
          </Nav.Link>
        ))}
      </ul>
    </div>
  );
}
