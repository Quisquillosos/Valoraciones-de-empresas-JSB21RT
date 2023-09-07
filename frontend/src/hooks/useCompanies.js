import { useEffect, useState } from 'react';
import { getAllCompaniesService } from '../services';

const useCompanies = () => {
    const [companiesList, setCompaniesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadCompanies = async () => {
            try {
                setLoading(true);

                const data = await getAllCompaniesService();

                setCompaniesList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadCompanies();
    }, []);

    return { companiesList, loading, error };
};

export default useCompanies;
