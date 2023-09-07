import { useEffect, useState } from 'react';
import { getSingleCompanyService } from '../services';

const useCompany = (id) => {
    const [companyData, setCompanyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadCompanyData = async () => {
            try {
                setLoading(true);
                const data = await getSingleCompanyService(id);

                setCompanyData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadCompanyData();
    }, [id]);

    return { companyData, loading, error };
};

export default useCompany;
