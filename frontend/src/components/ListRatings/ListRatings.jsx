import Rating from '../Rating/Rating';

function ListRatings({ rating }) {
    return rating && rating?.length ? (
        <ul className='ratingsList'>
            {rating.map((rating) => {
                return (
                    <li key={rating?.companyId}>
                        <Rating rating={rating} />
                    </li>
                );
            })}
        </ul>
    ) : (
        <p>You still have no ratings</p>
    );
}

export default ListRatings;
