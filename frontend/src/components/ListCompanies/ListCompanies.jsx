import Company from "../Company/Company";
import { Link } from "react-router-dom";
import { companiesList } from "./ListCompanies.module.css";
import Button from "../Button/Button";

const ListCompanies = ({ companies }) => {
  return companies?.length ? (
    <ul className={`${companiesList}`}>
      {companies?.map((company) => (
        <li key={company.name}>
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

export default ListCompanies;
