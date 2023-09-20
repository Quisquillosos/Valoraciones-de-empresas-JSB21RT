import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <ul>
          <li>
            <Link to={"/companies"}>Empresas</Link>
          </li>
          <li>switcher</li>
        </ul>
      )}
    </>
  );
};

export default Menu;
