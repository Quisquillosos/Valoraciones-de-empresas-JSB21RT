function Rating({ rating }) {
  return (
    <article>
      <h1>Rating</h1>
      <ul>
        <li>{`Salary --> {${rating?.salary}⭐`}</li>
        <li>{`Work environment --> ${rating?.workEnvironment}⭐`}</li>
        <li>{`Promotion Possibility --> ${rating?.promotionPosibility}⭐`}</li>
        <li>{`Accesibility --> ${rating?.accessibility}⭐`}</li>
      </ul>
      <p>{`Review --> ${rating?.review}`}</p>
    </article>
  );
}

export default Rating;
