import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../Auth/Auth";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (windowWidth >= 750) {
    return (
      <div>
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
      </div>
    );
  }
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
