const Company = ({ company }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const companyRatings = company?.totalAvgRatings?.slice(0, 4);

  return (
    <article className="companyData">
      <h1>{company?.name}</h1>
      <img src={`${backendUrl}/${company?.photo}`} alt={company?.bio} />
      <p>{`${company?.country}, ${company?.city}`}</p>
      <p>{`${company?.bio}`}</p>
      {companyRatings && <p>{`${companyRatings}⭐`}</p>}
    </article>
  );
};

export default Company;
