import { useState } from "react";
import ListCompanies from "../components/ListCompanies/ListCompanies";
import Searcher from "../components/Searcher/Searcher";
import useCompanies from "../hooks/useCompanies";
import Loader from "../components/Loader/Loader";

const CompaniesListPage = () => {
  const { companiesList, loading, error } = useCompanies();
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchResult = (data) => {
    setSearchResult(data);
  };

  if (loading) return <Loader />;

  if (error) return <div>error</div>;

  return (
    <main>
      <Searcher onSearchResult={handleSearchResult} />

      {searchResult && (
        <div>
          <ListCompanies companies={searchResult} />
        </div>
      )}

      {!searchResult && <ListCompanies companies={companiesList} />}
    </main>
  );
};

export default CompaniesListPage;
