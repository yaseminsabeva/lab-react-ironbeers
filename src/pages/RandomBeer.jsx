import React, { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState("");

  useEffect(() => {
    async function getBeer() {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setBeer(data);
    }
    getBeer();
  }, []);
  return <BeerCard beer={beer} />;
}

export default RandomBeer;
