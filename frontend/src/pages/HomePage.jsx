import { Link } from "react-router-dom";
import TopCompanies from "../components/TopCompanies/TopCompanies";
import useCompanies from "../hooks/useCompanies";
import { mainHeader, mainHomePage } from "./HomePage.module.css";
import Review from "../components/Review/Review";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const { companiesList, loading, error } = useCompanies();

  if (loading) return <Loader />;

  if (error) return <div>error</div>;

  return (
    <>
      <header className={`${mainHeader} `}>
        <h1>Evaluate, Compare, Decide</h1>
        <span>Your business guide</span>
      </header>
      <main className={`${mainHomePage} `}>
        <section>
          <h2>SOME OF OUR COMPANIES</h2>
          <TopCompanies companies={companiesList} />
          <Link to="/companies">
            <button>More companies</button>
          </Link>
        </section>
        <section>
          <Review companies={companiesList} />
        </section>
      </main>
    </>
  );
};
export default HomePage;
