import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "./dataLinks";
// Styles
import { Nav } from "./Header.styles";

function Navbar() {
  return (
    <Nav>
      <ul>
        {links.map((item) => {
          const { id, url, text } = item;
          return (
            <li key={id}>
              <NavLink to={url}>{text}</NavLink>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}

export default Navbar;
