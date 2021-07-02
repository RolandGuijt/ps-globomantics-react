import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import HousesContext from "../context/housesContext";
import { useContext } from "react";

const SearchResults = () => {
  const { country } = useParams();
  const allHouses = useContext(HousesContext);
  const filteredHouses = allHouses.filter((h) => h.country === country);

  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((h) => (
            <SearchResultsRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
