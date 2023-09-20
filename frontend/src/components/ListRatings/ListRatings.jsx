import Rating from "../Rating/Rating";

function ListRatings({ rating }) {
  return rating?.length ? (
    <ul className="ratingsList">
      {rating.map((rating) => {
        return (
          <li key={rating?.companyId}>
            <Rating rating={rating} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No ratings</p>
  );
}

export default ListRatings;
