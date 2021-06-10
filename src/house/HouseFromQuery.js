import { useParams } from "react-router-dom";
import House from "./";

const HouseFromQuery = ({ allHouses }) => {
  const { id } = useParams();
  const house = allHouses.find((h) => h.id === parseInt(id));

  if (!house) return <div>House not found.</div>;
  return <House house={house}></House>;
};

export default HouseFromQuery;
