import { useParams } from "react-router-dom";
import Company from "../components/Company/Company";
import useCompany from "../hooks/useCompany";
import ListRatings from "../components/ListRatings/ListRatings";
import useCompanyRatings from "../hooks/useCompanyRatings";
import { singleCompanyPageSection } from "./SingleCompanyPage.module.css";
import Loader from "../components/Loader/Loader";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SingleCompanyPage = () => {
  const { companyId } = useParams();
  const { companyData, loading, error } = useCompany(companyId);
  const { user } = useContext(AuthContext);
  const { ratingsData } = useCompanyRatings(companyId);

  if (!user?.user) return <Loader />;
  if (loading) return <Loader />;
  if (error) return <p>error</p>;

  const userId = user.user[0].id;
  let employee = companyData.some((company) => company?.employeeId === userId);

  return (
    <section className={`${singleCompanyPageSection}`}>
      <Company company={companyData[0]} />
      {employee ? <p>Im an employee</p> : <p>Im not an employee</p>}
      <ListRatings rating={ratingsData} />
    </section>
  );
};

export default SingleCompanyPage;
