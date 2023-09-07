import { Auth } from "../Auth/Auth";
import { Link } from "react-router-dom";
import { header } from "./Header.module.css";

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
            <Auth />
          </li>
          <li>Hamburguesa</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
