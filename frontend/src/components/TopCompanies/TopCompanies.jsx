import Company from "../Company/Company";
import { Link } from "react-router-dom";
import { topCompany } from "./TopCompanies.module.css";

const TopCompanies = ({ companies }) => {
  companies.sort((a, b) => b.totalAvgRatings - a.totalAvgRatings);

  const topThreeCompanies = companies.slice(0, 3);

  return topThreeCompanies.length ? (
    <ul className={`${topCompany}`}>
      {topThreeCompanies.map((company) => (
        <li key={company.name}>
          <Company company={company} />
          <Link to={`/companies/${company.id}`}>
            <button>View company</button>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No companies</p>
  );
};

export default TopCompanies;
