import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/hideshow">
            React User
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link className="btn btn-info" to="/add/user">
              Add User +
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
