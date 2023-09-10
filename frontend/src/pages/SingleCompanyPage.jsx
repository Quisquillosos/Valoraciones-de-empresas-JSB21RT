import { useParams } from "react-router-dom";
import Company from "../components/Company/Company";
import useCompany from "../hooks/useCompany";
import ListRatings from "../components/ListRatings/ListRatings";
import useCompanyRatings from "../hooks/useCompanyRatings";

const SingleCompanyPage = () => {
  const { companyId } = useParams();
  const { companyData, loading, error } = useCompany(companyId);
  const { ratingsData } = useCompanyRatings(companyId);

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <section>
      <h1>Company</h1>
      <Company company={companyData} />
      <ListRatings rating={ratingsData} />
    </section>
  );
};

export default SingleCompanyPage;
