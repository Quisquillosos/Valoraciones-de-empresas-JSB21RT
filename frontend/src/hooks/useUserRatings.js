import { useEffect, useState } from "react";
import { getUserRatingsService } from "../services";

const useUserRatings = (userId) => {
  const [userRatingsData, setUserRatingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        const data = await getUserRatingsService(userId);
        setUserRatingsData(data.employeesRatings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [userId]);

  return { userRatingsData, loading, error };
};

export default useUserRatings;
