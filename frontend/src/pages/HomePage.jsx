import { Link } from "react-router-dom";
import TopCompanies from "../components/TopCompanies/TopCompanies";
import useCompanies from "../hooks/useCompanies";
import { mainHeader, mainHomePage } from "./HomePage.module.css";
import Review from "../components/Review/Review";

const HomePage = () => {
  const { companiesList, loading, error } = useCompanies();

  if (loading) return <div>loading</div>;

  if (error) return <div>error</div>;

  return (
    <>
      <header className={`${mainHeader} `}>
        <h1>Evaluate, Compare, Decide</h1>
          <span>Your business guide
</span>
      </header>
      <main className={`${mainHomePage} `}>
        <section>
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
