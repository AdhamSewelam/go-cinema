import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  function userName() {
    let username = JSON.parse(localStorage.getItem("userData"));
    let surname = "Welcome" + " " + username.firstName;
    return surname;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent navbar-dark ">
        <div className="container">
          <Link className="navbar-brand fw-bolder textShadow" to="home">
            Go Cinema
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.userData ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="movies">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="tv">
                      TV Shows
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4 mt-1 fw-bold textShadow fs-5">
                {localStorage.getItem("userData") ? userName() : ""}
              </li>
              <li className="nav-item me-3 my-2 d-flex align-items-center iconSocial">
                <i className="fab me-2 fa-instagram"></i>
                <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-youtube"></i>
                <i className="fab mx-2 fa-spotify"></i>
              </li>
              {props.userData ? (
                <>
                  <li className="nav-item">
                    <a onClick={props.logOut} className="nav-link logBtn">
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
