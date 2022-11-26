import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState("");

  useEffect(() => {
    async function getBeers() {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(data);
    }
    getBeers();
  }, []);

  console.log(beers);
  if (!beers) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Beers</h1>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`${beer._id}`}>{beer.name}</Link>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
