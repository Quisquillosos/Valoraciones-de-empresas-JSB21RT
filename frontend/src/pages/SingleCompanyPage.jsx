import { useParams } from "react-router-dom";
import Company from "../components/Company/Company";
import useCompany from "../hooks/useCompany";

const SingleCompanyPage = () => {
  const { id } = useParams();
  const { company, error, loading } = useCompany(id);

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <section>
      <h1>Company</h1>
      <Company company={company} />
    </section>
  );
};

export default SingleCompanyPage;
