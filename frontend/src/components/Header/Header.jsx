import Menu from "../Menu/Menu.jsx";
import { Link } from "react-router-dom";
import { header } from "./Header.module.css";

import logoSrc from "/awaitQ2.png";

const Header = () => {
  return (
    <header className={`${header} `}>
      <Link to="/">
        <img src={logoSrc} alt="logo pagina" />
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
