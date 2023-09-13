const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Rating({ rating }) {
  return (
    <article>
      <div className="userInfo">
        {rating?.photo && (
          <img
            src={`${backendUrl}/uploads/${rating?.photo} `}
            alt={rating?.firstName}
          />
        )}

        <p>
          {rating?.firstName} {rating?.lastName}
        </p>
      </div>

      <ul>
        <li>{`Salary --> ${rating?.avgSalary}⭐`}</li>
        <li>{`Work environment --> ${rating?.avgWorkEnvironment}⭐`}</li>
        <li>{`Promotion Possibility --> ${rating?.avgPromotionPosibility}⭐`}</li>
        <li>{`Accesibility --> ${rating?.avgAccesibility}⭐`}</li>
      </ul>
      <p>{`Review --> ${rating?.review}`}</p>
    </article>
  );
}

export default Rating;
