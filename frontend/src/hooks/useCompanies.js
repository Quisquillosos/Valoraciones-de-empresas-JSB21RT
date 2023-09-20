import { useEffect, useState } from "react";
import { getAllCompaniesService } from "../services";

const useCompanies = () => {
  const [companiesList, setCompaniesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        setLoading(true);

        let data = await getAllCompaniesService();

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

        setCompaniesList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCompanies();
  }, []);

  const addCompany = (data) => {
    setCompaniesList([data, ...companiesList]);
  };

  return { companiesList, loading, error, addCompany };
};

export default useCompanies;
