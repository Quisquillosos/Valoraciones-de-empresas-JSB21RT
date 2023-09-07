import Company from '../Company/Company';

const ListCompanies = ({ companies }) => {
    // console.log(companies);
    // console.log(typeof companies);
    // console.log(companies.length);
    return companies.length ? (
        <ul className='companiesList'>
            {companies.map((company) => {
                console.log('holaa');
                console.log(company);
                return (
                    <li key={company.name}>
                        <Company company={company} />
                    </li>
                );
            })}
        </ul>
    ) : (
        <p>No hay empresitas🚀</p>
    );
};

export default ListCompanies;
