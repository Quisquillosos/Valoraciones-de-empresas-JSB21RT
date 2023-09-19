const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Review = ({ companies }) => {
    if (companies.length > 3) {
        companies.splice(Math.floor(Math.random() * companies.length), 1);
    }

    return (
        <>
            {companies.map((company) => {
                return (
                    <article className='reviewBox' key={company?.id}>
                        <img
                            src={`${backendUrl}${company?.photo}`}
                            alt={company?.name}
                        />
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
