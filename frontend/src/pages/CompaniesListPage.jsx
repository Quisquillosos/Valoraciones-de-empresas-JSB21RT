import ListCompanies from "../components/ListCompanies/ListCompanies";
import useCompanies from "../hooks/useCompanies";
import "./CompaniesListPage.module.css";

const CompaniesListPage = () => {
  const { companiesList, loading, error } = useCompanies();

  if (loading) return <div>loading</div>;

  if (error) return <div>error</div>;

  return (
    <div>
      <ListCompanies companies={companiesList} />
    </div>
  );
};

export default CompaniesListPage;
