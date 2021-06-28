import { useState, useEffect, useMemo } from "react";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HouseFromQuery from "../house/HouseFromQuery";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />

        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>

          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses} />
          </Route>

          <Route path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
