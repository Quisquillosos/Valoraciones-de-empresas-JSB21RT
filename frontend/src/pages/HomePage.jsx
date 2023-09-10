import { Link } from "react-router-dom";
import TopCompanies from "../components/TopCompanies/TopCompanies";
import useCompanies from "../hooks/useCompanies";
import { mainHeader, mainHomePage } from "./HomePage.module.css";

const HomePage = () => {
  const { companiesList, loading, error } = useCompanies();

  if (loading) return <div>loading</div>;

  if (error) return <div>error</div>;

  return (
    <>
      <header className={`${mainHeader} `}>
        <h1>Home Page</h1>
      </header>
      <main className={`${mainHomePage} `}>
        <section>
          <TopCompanies companies={companiesList} />
          <Link to="/companies">
            <button>Ver mas empresas</button>
          </Link>
        </section>
        <section>opiniones</section>
      </main>
    </>
  );
};
export default HomePage;
