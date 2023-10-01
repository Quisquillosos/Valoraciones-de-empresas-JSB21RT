const Company = ({ company }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  let media;

  if (company[0]) {
    const suma = company.reduce((acumulador, company) => {
      return acumulador + +company.totalAvgRatings;
    }, 0);
    media = suma / company.length;
    if (media === 0) media = null;
  }

  if (!company[0]) {
    return (
      <article>
        <h1>{company?.name}</h1>
        <img src={`${backendUrl}/${company?.photo}`} alt={company?.bio} />
        <p>{`${company?.country}, ${company?.city}`}</p>
        <p>{`${company?.bio}`}</p>
        {media && <p>{`${media}⭐`}</p>}
      </article>
    );
  }
  return (
    <article>
      <h1>{company[0]?.name}</h1>
      <img src={`${backendUrl}/${company[0]?.photo}`} alt={company[0]?.bio} />
      <p>{`${company[0]?.country}, ${company[0]?.city}`}</p>
      <p>{`${company[0]?.bio}`}</p>
      {media && <p>{`${media.toString().slice(0, 3)}⭐`}</p>}
    </article>
  );
};

export default Company;
