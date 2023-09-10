import Company from "../Company/Company";
import { Link } from "react-router-dom";

const TopCompanies = ({ companies }) => {
  companies.sort((a, b) => b.totalAvgRatings - a.totalAvgRatings);

  const topThreeCompanies = companies.slice(0, 3);

  return topThreeCompanies.length ? (
    <ul className="topCompany">
      {topThreeCompanies.map((company) => (
        <li key={company.name}>
          <Company company={company} />
          <Link to={`/companies/${company.id}`}>
            <button>Ver empresa</button>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay empresitas🚀</p>
  );
};

export default TopCompanies;
