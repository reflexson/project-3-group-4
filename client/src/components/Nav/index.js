import React from "react";
import Auth from "../../utils/auth";
import { NavLink } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row mt-3 ms-5 list-unstyled">
          <li className="ms-3">
            <NavLink to="/progress">
              Dashboard
            </NavLink>
          </li>
          <li className="ms-3">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row mt-3 ms-5 list-unstyled">
          <li className="ms-3">
            <NavLink  to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="ms-3">
            <NavLink  to="/login">
              Login
            </NavLink>
          </li >
          <li className="ms-3">
            <NavLink  to='/progress'>
              Dashboard
            </NavLink>
          </li>
          {/* <li className="ms-3">
            <NavLink activeStyle={{color: "#ff3333"}} to='/test'>
              test
            </NavLink>
          </li> */}
        </ul>
      );
    }
  }

  return (
    <header className="flex-row ps-3 pt-2 text-decoration-none">
      <h1>
        <NavLink to="/">
          {/* <span role="img" aria-label=""></span> */}
          Workout Tracker
        </NavLink>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
