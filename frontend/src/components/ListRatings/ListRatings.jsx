import Rating from "../Rating/Rating";

function ListRatings({ ratingsData }) {
  console.log(ratingsData);
  console.log("HOLAAA");
  return ratingsData?.length ? (
    <ul className="ratingsList">
      {ratingsData.map((rating) => {
        return (
          <li key={rating?.name}>
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
