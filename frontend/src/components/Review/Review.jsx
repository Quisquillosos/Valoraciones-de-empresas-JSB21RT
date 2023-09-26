const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { reviewBox } from "./Review.module.css";

const Review = ({ companies }) => {
  const filteredCompanies = companies.filter(
    (company) => company.review !== null
  );

  const displayedCompanies = filteredCompanies.slice(0, 3);

  displayedCompanies.sort(() => Math.random() - 0.5);

  if (displayedCompanies.length < 3) return <p>loading</p>;

  return (
    <>
      {displayedCompanies.map((company) => {
        return (
          <article className={`${reviewBox}`} key={company?.id}>
            <img src={`${backendUrl}/${company?.photo}`} alt={company?.name} />
            <h3>
              {company?.firstName} {company?.lastName}
            </h3>
            <p>{company?.review}</p>
          </article>
        );
      })}
    </>
  );
};

export default Review;
