import Rating from "../Rating/Rating";

function ListRatings({ rating }) {
  return rating && rating?.length ? (
    <>
      <ul className="ratingsList">
        {rating.map((rating) => {
          return (
            <li key={rating?.uniqueKey}>
              <Rating rating={rating} />
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <p>No ratings yet</p>
  );
}

export default ListRatings;
