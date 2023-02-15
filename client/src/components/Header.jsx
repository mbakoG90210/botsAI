import React from "react";
import { Link } from "react-router-dom";
import { logopic } from "../assets/index";

const Header = () => {
  return (
    <header className="navbar glass bg-base-300 justify-between items-center sm:px-8 px-4 py-4  border-b-4 border-accent-focus">
      <Link to="/">
        <img src={logopic} alt="logo" className="w-12 object-contain" />
      </Link>
      <Link
        to="/create-post"
        className="btn btn-primary font-inter font-medium normal-case px-4 py-2 rounded-md"
      >
        Create Dream
      </Link>
    </header>
  );
};

export default Header;
