import React, { useState } from "react";
import "./Navbar.css";
import "./NavbarMd.css";
import { Icon } from "../../Constant/iconPath";
import { Link, NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const Location = useLocation();

  const [openNavbar, setOpenNavbar] = useState(true);

  const CloseLink = () => {
    setOpenNavbar(true);
  };
  return (
    <>
      <div className="NavBar_Main_Container">
        <div className="NavBar_Left_Container">
          <div className="NavBar_Left_First_Logo">
            <NavLink to="/">
              <img src={Icon.Main_Logo} alt="" className="Main_Logo" />
            </NavLink>
          </div>
          <div className="NavBar_Left_Second_Border"></div>
        </div>
        <div className="Navbar_Right_Item">
          <div
            className={`NavBar_Right_Container ${
              openNavbar ? "NavBar_Right_Container" : "Mobile_Navbar"
            }`}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={CloseLink}
                  style={{
                    borderBottom:
                      Location.pathname === "/" ? "4px solid white" : "",
                  }}
                >
                  <span>00</span> HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/destination"
                  onClick={CloseLink}
                  style={{
                    borderBottom:
                      Location.pathname === "/destination"
                        ? "4px solid white"
                        : "",
                  }}
                >
                  <span>02</span>
                  DESTINATION
                </Link>
              </li>
              <li>
                <Link
                  to="/crew"
                  onClick={CloseLink}
                  style={{
                    borderBottom:
                      Location.pathname === "/crew" ? "4px solid white" : "",
                  }}
                >
                  <span>03</span> CREW
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  onClick={CloseLink}
                  style={{
                    borderBottom:
                      Location.pathname === "/technology"
                        ? "4px solid white"
                        : "",
                  }}
                >
                  <span>04</span> TECHNOLOGY
                </Link>
              </li>
            </ul>
          </div>
          <div className="Menu_Bar">
            <div
              className="Open_Bar"
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
            >
              {openNavbar ? (
                <img
                  src={Icon.Open_Logo}
                  className="Hamburger_Menu"
                  alt="Menu_Bar"
                />
              ) : (
                <img
                  src={Icon.Close_Logo}
                  className="Hamburger_Menu"
                  alt="Menu_Bar"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
