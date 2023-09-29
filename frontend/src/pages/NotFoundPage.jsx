import "./NotFoundPage.module.css";
import imgSrc from "/nfp.jpeg";
import { Link } from "react-router-dom";
import { notFoundMain } from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={`${notFoundMain}`}>
      <img src={`${imgSrc}`} alt="Not Found Page" />
      <div>
        <Link to={"/"}> <div>Dumitru</div> </Link>
        <Link to={"/"}><div>Noe</div> </Link>
        <Link to={"/"}> <div>Angela</div></Link>
        <Link to={"/"}><div>David</div> </Link>
      </div>
    </main>
  );
};
export default NotFoundPage;
