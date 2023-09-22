import { useState } from 'react';
import { getAllCompaniesService } from '../../services';
import Accordion from '../Accordion/Accordion';
import imgSrc from '/searchLogo.svg';
import { useNavigate } from 'react-router-dom';

const Searcher = ({ onSearchResult }) => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data = await getAllCompaniesService(keyword);

            const latestRatings = {};

            data.companies.forEach((company) => {
                if (
                    !(company.name in latestRatings) ||
                    company.createdAt > latestRatings[company.name].createdAt
                ) {
                    latestRatings[company.name] = company;
                }
            });

            const companiesFiltered = Object.values(latestRatings);
            data = companiesFiltered;

            console.log(data, 'data');
            navigate('/companies');
            if (onSearchResult) {
                onSearchResult(data);
            }
        } catch (err) {
            setError('An error has occurred in your search');
        }
    };
    return (
        <>
            <Accordion imgSrc={imgSrc}>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button>filter</button>
                </form>
                {error && <p>{error}</p>}
            </Accordion>
        </>
    );
};

export default Searcher;
