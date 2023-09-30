const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { ratingArticle } from './Rating.module.css';

function Rating({ rating }) {
    return (
        <article className={`${ratingArticle}`}>
            <div className='userInfo'>
                {rating?.photo && (
                    <img
                        src={`${backendUrl}/${rating?.photo}`}
                        alt={rating?.firstName}
                    />
                )}

                <p>
                    {rating?.firstName} {rating?.lastName}
                </p>
            </div>

            <ul>
                <li>
                    <span>Salary </span> <span>{`${rating?.avgSalary}⭐`}</span>
                </li>
                <li>
                    <span>Work environment </span>
                    <span>{`${rating?.avgWorkEnvironment}⭐`}</span>
                </li>
                <li>
                    <span>Promotion Possibility </span>
                    <span>{`${rating?.avgPromotionPosibility}⭐`}</span>
                </li>
                <li>
                    <span>Accessibility </span>
                    <span>{`${rating?.avgAccesibility}⭐`}</span>
                </li>
            </ul>
            <p>{` ${rating?.review}`}</p>
        </article>
    );
}

export default Rating;
