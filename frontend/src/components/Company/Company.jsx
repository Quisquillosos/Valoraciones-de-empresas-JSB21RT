const Company = ({ company }) => {
    return (
        <article className='companyData'>
            <h1>{company?.name}</h1>
            <p>{`${company?.country}, ${company?.city}`}</p>
            <p>{`${company?.totalAvgRatings}⭐`}</p>
        </article>
    );
};

export default Company;
