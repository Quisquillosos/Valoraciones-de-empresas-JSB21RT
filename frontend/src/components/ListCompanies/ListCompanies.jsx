import Company from "../Company/Company";
import { Link } from "react-router-dom";

const ListCompanies = ({ companies }) => {
  console.log(companies, "companies");
  return companies?.length ? (
    <ul className="companiesList">
      {companies?.map((company) => (
        <li key={company.name}>
          <Company company={company} />
          <Link to={`/companies/${company.id}`}>
            <button>Ver empresa</button>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay empresas</p>
  );
};

export default ListCompanies;
