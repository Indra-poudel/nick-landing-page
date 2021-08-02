import React from "react";

import { logo } from "../../assets/images";
import "./navbar.css";
import { NAVBAR_MENU_LIST } from "../../constants/constants";

function Navbar() {
  return (
    <div className="page__spacing navbar__wrapper">
      <img alt="logo" src={logo} />
      <ul className="navbar__ul">
        {NAVBAR_MENU_LIST.map((navbar) => (
          <li key={navbar.key} className={`navbar__wrapper_li ${navbar.key}`}>
            {navbar.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
