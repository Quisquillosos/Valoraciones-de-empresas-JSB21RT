import { useEffect, useState } from "react";
import { getCompanyRatingsService } from "../services";

const useCompanyRatings = (companyId) => {
  const [ratingsData, setRatingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCompanyData = async () => {
      try {
        setLoading(true);
        const data = await getCompanyRatingsService(companyId);

        setRatingsData(data.companies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCompanyData();
  }, [companyId]);

  return { ratingsData, loading, error };
};

export default useCompanyRatings;
