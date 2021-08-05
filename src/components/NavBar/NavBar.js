import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./NavBar.css";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://agile-brook-68982.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <>
      <div className="nav__section">
        <nav className="navbar navbar-expand-lg  navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <span className="text-uppercase">
                <FontAwesomeIcon icon={faCameraRetro} /> Photography
              </span>
            </Link>
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
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link custom-nav-link mr-4 my-2 active text-uppercase"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link custom-nav-link mr-4 my-2 text-uppercase"
                    to="/"
                  >
                    Blogs
                  </Link>
                </li>

                <li className="nav-item">
                  {isAdmin ? (
                    <Link
                      className="nav-link custom-nav-link mr-4 my-2 text-uppercase"
                      to="/orderList"
                    >
                      Admin
                    </Link>
                  ) : (
                    <Link
                      className="nav-link custom-nav-link mr-4 my-2 text-uppercase"
                      to="/buyProduct/:id"
                    >
                      Dashboard
                    </Link>
                  )}
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link custom-nav-link mr-4 my-2 text-uppercase"
                    to="/"
                  >
                    ContactUs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn header_btn_2 text-white mr-4 my-2 px-4 text-uppercase"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <img
                    style={{ width: "40px", height: "40px" }}
                    className="rounded-circle mr-4 my-2"
                    src={loggedInUser.image}
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
