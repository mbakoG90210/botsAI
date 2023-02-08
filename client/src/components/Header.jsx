import React from "react";
import { Link } from 'react-router-dom';
import { logopic } from './assets';

const Header = () => {
  return (
    <header className="navbar bg-primary-50 opacity-25">
        <Link to="/">
          <img src={logopic} alt="logo" className="w-30 object-contain" />
        </Link>
        <Link to="/create-post" className="btn btn-ghost font-inter font-medium normal-case">
        Create Dream
        </Link>
    </header>
  );
};

export default Header;
