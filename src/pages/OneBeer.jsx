import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BeerCard from "../components/BeerCard";

function OneBeer() {
  const params = useParams();
  const id = params.id;

  const [beer, setBeer] = useState("");

  useEffect(() => {
    async function getBeer() {
      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setBeer(data);
    }
    getBeer();
  }, [id]);

  console.log(beer);
  if (!beer) {
    return <div>Loading...</div>;
  }
  return <BeerCard beer={beer} />;
}

export default OneBeer;
