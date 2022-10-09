import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavContext } from "../App";
import "../css/nav.css";
import Logo from "../images/logo.jpeg";
const Navbar = () => {
  const History = useNavigate();
  const { navState } = useContext(NavContext);
  const [flag, setFlag] = useState(false);
  const Nav = () => {
    const AuthAdmin = async () => {
      const res = await fetch("/authAdmin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.message === "error") {
        setFlag(false);
      } else {
        setFlag(true);
      }
    };
    useEffect(() => {
      AuthAdmin();
    }, []);
    if (flag || navState) {
      return (
        <div className="container container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-black navbar_round">
            <div className="container-fluid">
              <NavLink className="navbar-brand brand_name text-white" to="/">
                <img
                  className="img-fluid"
                  style={{
                    width: "50px",
                    borderRadius: "50px",
                    marginTop: "-10px",
                  }}
                  src={Logo}
                  alt="Logo"
                />{" "}
                &nbsp;
                <span
                  // className="mt-5"
                  id="set_logo_text"
                  style={{ fontSize: "30px" }}
                >
                  Pegham Foundation
                </span>
              </NavLink>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 set_navItems_side">
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/homeCover"
                    >
                      Home_Cover
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active "
                      className="nav-link text-white"
                      aria-current="page"
                      to="/addVideo"
                    >
                      Add_Video
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/delVideo"
                    >
                      Del_Video
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/addTeam"
                    >
                      Add_Team
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/remTeam"
                    >
                      Rem_Team
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/addService"
                    >
                      Add_Service
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/remService"
                    >
                      Rem_Service
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/logoutAdmin"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="container container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-black text-white">
            <div className="container-fluid">
              <NavLink className="navbar-brand brand_name text-white" to="/">
                <img
                  className="img-fluid"
                  style={{
                    width: "50px",
                    borderRadius: "50px",
                    marginTop: "-10px",
                  }}
                  src={Logo}
                  alt="Logo"
                />
                &nbsp;
                <span
                  // className="mt-5"
                  id="set_logo_text"
                  style={{ fontSize: "30px" }}
                >
                  Pegham Foundation
                </span>
              </NavLink>
              <button
                className="navbar-toggler text-bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 set_navItems_side">
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/services"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/team"
                    >
                      Team
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/videos"
                    >
                      Videos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact="true"
                      activeClassName="active"
                      className="nav-link text-white"
                      aria-current="page"
                      to="/about"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => {
                        History("/donateNow");
                      }}
                      className="btn btn-success"
                    >
                      Donate Now
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  };

  return (
    <>
      <Nav />
    </>
  );
};
export default Navbar;
