import { useParams } from "react-router-dom";
import BaseHouse from "./BaseHouse";

const HouseFromQuery = ({ allHouses }) => {
  const { id } = useParams();
  const house = allHouses.find((h) => h.id === parseInt(id));

  if (!house) return <div>House not found.</div>;
  return <BaseHouse house={house}></BaseHouse>;
};

export default HouseFromQuery;
