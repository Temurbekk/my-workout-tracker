import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/sign-in">SignIn</Link>
        <Link to="/sign-up">SignUp</Link>
      </nav>
    </div>
  );
}

export default Navbar;
