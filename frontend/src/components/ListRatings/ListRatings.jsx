import Rating from "../Rating/Rating";

function ListRatings({ rating }) {
  return rating?.length ? (
    <ul className="ratingsList">
      {rating.map((rating) => {
        return (
          <li key={rating?.firstName}>
            <Rating rating={rating} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay ratingchis🚀</p>
  );
}

export default ListRatings;
