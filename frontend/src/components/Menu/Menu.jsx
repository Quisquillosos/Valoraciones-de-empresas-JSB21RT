import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../Auth/Auth";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      {isOpen && (
        <nav>
          <ul>
            <li>
              <Link to={"/companies"}>Companies</Link>
            </li>

            <li>
              <Auth />
            </li>
          </ul>
        </nav>
      )}
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
};

export default Menu;
