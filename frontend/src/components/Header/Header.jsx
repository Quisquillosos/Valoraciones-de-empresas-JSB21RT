import { Auth } from "../Auth/Auth";
import { Link } from "react-router-dom";
import { header } from "./Header.module.css";
import Accordion from "../Accordion/Accordion";
import imgSrc from "/logoPerson.svg";
import logoSrc from "/awaitQ2.png";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <header className={`${header} `}>
      <Link to="/">
        <img src={logoSrc} alt="logo pagina" />
      </Link>
      <nav>
        <ul>
          <li>
            <Accordion imgSrc={imgSrc}>
              <Auth />
            </Accordion>
          </li>
          <li>
            <Menu></Menu>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
