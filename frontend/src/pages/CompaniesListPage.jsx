import useCompanies from "../hooks/useCompanies";
import "./CompaniesListPage.module.css";

const CompaniesListPage = () => {
  const { companiesList, loading, error } = useCompanies();
  return <div>Companies Page: Lista de compañías</div>;
};
export default CompaniesListPage;
