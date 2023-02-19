import React from "react";
import { Link } from "react-router-dom";
import { logopic } from "../assets/index";

const Header = () => {
  return (
    <header className="navbar glass  justify-between items-center sm:px-8 px-4 py-4  border-b-4 border-accent-focus">
      <Link to="/">
        <img src={logopic} alt="logo" className="w-12 object-contain drop-shadow-lg" />
        <p className="font-arthemys font-bold text-primary-focus drop-shadow-lg">dreams<span className="font-arthemys font-semibold text-primary-focus drop-shadow-lg">AI</span></p>
      </Link>
      <Link
        to="/create-post"
        className="btn btn-active btn-primary font-arthemys text-slate-100 font-medium normal-case px-4 py-2 rounded-md"
      >
        Create Dream
      </Link>
    </header>
  );
};

export default Header;
