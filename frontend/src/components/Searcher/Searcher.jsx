import { useState } from 'react';
import { getAllCompaniesFilteredService } from '../../services';
import Accordion from '../Accordion/Accordion';
import imgSrc from '/logoPerson.jpg';
import { useNavigate } from 'react-router-dom';

const Searcher = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await getAllCompaniesFilteredService(keyword);
            console.log(data);
        } catch (err) {
            setError('Ha ocurrido un error en tu busqueda');
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
                </form>
                {error && <p>{error}</p>}
            </Accordion>
        </>
    );
};

export default Searcher;
