import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="nav">
        <a className="active" href="http://www.sigdeletras.com">
          SIGdeletras
        </a>
        <div className="nav__infolinks">
          <a href="#search_tools_section">Buscador</a>
          <a href="#about">Info</a>
          <a href="https://github.com/sigdeletras/buscacalles-cartociudad">GitHub</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
