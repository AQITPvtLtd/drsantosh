import React from "react";
import Top from "./Top";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="hidden lg:block dark:text-white">
        <Top />
      </div>
      <Navbar className="dark:text-white" />
    </div>
  );
};

export default Header;
