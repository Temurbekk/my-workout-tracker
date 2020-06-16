import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/signIn">SignIn</Link>
        <Link to="/signUp">SignUp</Link>
      </nav>
    </div>
  );
}

export default Navbar;
