import React from "react";

const Header = () => {
  return (
    <div className="ui top attached massive fluid five item inverted sticky menu">
      <a className="item" href="#home">
        Home
      </a>
      <a className="item" href="#context1">
        About
      </a>
      <a className="item" href="#context2">
        Skills
      </a>
      <a className="item" href="#context3">
        Projects
      </a>
      <a className="item" href="#context4">
        Contact
      </a>
    </div>
  );
};

export default Header;
