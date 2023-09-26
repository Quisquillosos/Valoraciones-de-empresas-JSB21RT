const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Rating({ rating }) {
  return (
    <article>
      <div className="userInfo">
        {rating?.photo && (
          <img src={`${backendUrl}/${rating?.photo}`} alt={rating?.firstName} />
        )}

        <p>
          {rating?.firstName} {rating?.lastName}
        </p>
      </div>

      <ul>
        <li>
          <span>Salary</span>{" "}
          <span>{`${rating?.avgSalary?.slice(0, 3)}⭐`}</span>
        </li>
        <li>
          <span>Work environment</span>
          <span>{`${rating?.avgWorkEnvironment?.slice(0, 3)}⭐`}</span>
        </li>
        <li>
          <span>Promotion Possibility</span>{" "}
          <span>{`  ${rating?.avgPromotionPosibility?.slice(0, 3)}⭐`}</span>
        </li>
        <li>
          <span>Accessibility</span>
          <span>{`${rating?.avgAccesibility?.slice(0, 3)}⭐`}</span>
        </li>
      </ul>
      <p>{` ${rating?.review}`}</p>
    </article>
  );
}

export default Rating;
