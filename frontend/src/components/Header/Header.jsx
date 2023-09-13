import { Auth } from "../Auth/Auth";
import { Link } from "react-router-dom";
import { header } from "./Header.module.css";
import Accordion from "../Accordion/Accordion";
import imgSrc from "/logoPerson.jpg";

const Header = () => {
  return (
    <header className={`${header} `}>
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <nav>
        <ul>
          <li>Buscador</li>
          <li>Lang</li>
          <li>
            <Accordion imgSrc={imgSrc}>
              <Auth />
            </Accordion>
          </li>
          <li>
            <Accordion>Hamburguesa</Accordion>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
