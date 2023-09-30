import { Link, useParams } from 'react-router-dom';
import Company from '../components/Company/Company';
import useCompany from '../hooks/useCompany';
import ListRatings from '../components/ListRatings/ListRatings';
import useCompanyRatings from '../hooks/useCompanyRatings';
import { singleCompanyPageSection } from './SingleCompanyPage.module.css';
import Loader from '../components/Loader/Loader';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from '../components/Button/Button';

const SingleCompanyPage = () => {
    const { companyId } = useParams();
    const { companyData, loading, error } = useCompany(companyId);
    const { user } = useContext(AuthContext);
    const { ratingsData } = useCompanyRatings(companyId);
    console.log(ratingsData, 'esto es ratingsData');

    if (loading) return <Loader />;
    if (error) return <p>error</p>;

    if (user) {
        if (!user?.user) return <Loader />;
        const userId = user.user[0].id;
        let employee = companyData.some(
            (company) => company?.employeeId === userId
        );
        let confirmed = companyData.some(
            (company) =>
                company?.employeeId === userId && company?.confirmed == 1
        );

        if (!confirmed && employee) {
            return (
                <section className={`${singleCompanyPageSection}`}>
                    <Company company={companyData[0]} />
                    <p>Not Confirmed yet</p>
                    <ListRatings rating={ratingsData} />
                </section>
            );
        }
        return (
            <section className={`${singleCompanyPageSection}`}>
                <Company company={companyData[0]} />
                {employee ? (
                    <Link to={`/ratings/companies/${companyId}`}>
                        <Button>Rate this company</Button>
                    </Link>
                ) : (
                    <Link to={`/companies/employee/register/${companyId}`}>
                        <Button>Register as an employee</Button>
                    </Link>
                )}
                <ListRatings rating={ratingsData} />
            </section>
        );
    }

    return (
        <section className={`${singleCompanyPageSection}`}>
            <Company company={companyData[0]} />
            <ListRatings rating={ratingsData} />
        </section>
    );
};

export default SingleCompanyPage;
