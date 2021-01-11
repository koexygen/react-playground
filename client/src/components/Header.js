import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Stream-app
      </Link>
      <div className="right menu">
        <Link className="item" to="/">
          All Streams
        </Link>

        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
