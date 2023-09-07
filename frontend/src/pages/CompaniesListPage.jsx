import ListCompanies from '../components/ListCompanies/ListCompanies';
import useCompanies from '../hooks/useCompanies';
import './CompaniesListPage.module.css';

const CompaniesListPage = () => {
    const { companiesList, loading, error } = useCompanies();

    if (loading) return <div>error</div>;
    console.log(companiesList);
    if (error) return <div>laoding</div>;

    return <ListCompanies companies={companiesList.companies} />;
};
export default CompaniesListPage;
