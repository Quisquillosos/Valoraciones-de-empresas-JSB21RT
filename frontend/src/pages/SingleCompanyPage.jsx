import { useParams } from 'react-router-dom';
import Company from '../components/Company/Company';
import useCompany from '../hooks/useCompany';
import ListRatings from '../components/ListRatings/ListRatings';
import useCompanyRatings from '../hooks/useCompanyRatings';
import { singleCompanyPageSection } from './SingleCompanyPage.module.css';
import Loader from '../components/Loader/Loader';

const SingleCompanyPage = () => {
    const { companyId } = useParams();
    const { companyData, loading, error } = useCompany(companyId);
    const { ratingsData } = useCompanyRatings(companyId);

    if (loading) return <Loader />;
    if (error) return <p>error</p>;

    return (
        <section className={`${singleCompanyPageSection}`}>
            <Company company={companyData} />
            <ListRatings rating={ratingsData} />
        </section>
    );
};

export default SingleCompanyPage;
