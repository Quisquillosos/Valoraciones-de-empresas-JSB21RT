import { Link, useParams } from "react-router-dom";
import Company from "../components/Company/Company";
import useCompany from "../hooks/useCompany";
import ListRatings from "../components/ListRatings/ListRatings";
import useCompanyRatings from "../hooks/useCompanyRatings";
import { singleCompanyPageSection } from "./SingleCompanyPage.module.css";
import Loader from "../components/Loader/Loader";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button/Button";

const SingleCompanyPage = () => {
  const { companyId } = useParams();
  const { companyData, loading, error } = useCompany(companyId);

  const { user } = useContext(AuthContext);
  const { ratingsData } = useCompanyRatings(companyId);

  if (loading) return <Loader />;
  if (error) return <p>error</p>;

  if (user) {
    if (!user?.user) return <Loader />;
    const userId = user?.user[0]?.id || user?.user?.id;
    let employee = companyData.some(
      (company) => company?.employeeId === userId
    );
    let confirmed = companyData.some(
      (company) => company?.employeeId === userId && company?.confirmed == 1
    );

    if (!confirmed && employee) {
      return (
        <main>
          <section className={`${singleCompanyPageSection}`}>
            <Company company={companyData} />
            <p>
              Not confirmed yet. Wait until the company confirms you as an
              employee
            </p>
            <ListRatings rating={ratingsData} />
          </section>
        </main>
      );
    }
    return (
      <main>
        <section className={`${singleCompanyPageSection}`}>
          <Company company={companyData} />
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
      </main>
    );
  }

  return (
    <main>
      <section className={`${singleCompanyPageSection}`}>
        <Company company={companyData} />
        <ListRatings rating={ratingsData} />
      </section>
    </main>
  );
};

export default SingleCompanyPage;
