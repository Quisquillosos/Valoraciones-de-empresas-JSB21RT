import Company from "../Company/Company";
import { Link } from "react-router-dom";
import { topCompany } from "./TopCompanies.module.css";
import Button from "../Button/Button";

const TopCompanies = ({ companies }) => {
  function randomComparison() {
    return 0.5 - Math.random();
  }
  companies.sort(randomComparison);

  const topThreeCompanies = companies.slice(0, 3);

  return topThreeCompanies.length ? (
    <ul className={`${topCompany}`}>
      {topThreeCompanies.map((company) => (
        <li key={company?.name}>
          <Company company={company} />
          <Link to={`/companies/${company.id}`}>
            <Button>View Company</Button>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No companies</p>
  );
};

export default TopCompanies;
