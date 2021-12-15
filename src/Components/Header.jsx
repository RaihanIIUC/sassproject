import React from "react";

function Header() {
  return (
    <header>
      <div className="menu-btn">
        <span className="menu-btn__burger"></span>
        <nav className="nav">
          <ul className="menu-nav">
            <li className="menu-nav__item">
              <a href="" active="true" className="menu-nav__link">
                Home{" "}
              </a>
            </li>
            <li className="menu-nav__item">
              <a href="" className="menu-nav__link">
                About me{" "}
              </a>
            </li>
            <li className="menu-nav__item">
              <a href="" className="menu-nav__link">
                My Projects
              </a>
            </li>
            <li className="menu-nav__item">
              <a href="" className="menu-nav__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
