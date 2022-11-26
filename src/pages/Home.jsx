import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Link
          to="/beers"
          style={{ display: "block", fontSize: "20px", textDecoration: "none" }}
        >
          All Beers
        </Link>
        <img src="/beers.png" alt="beers" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In provident
          sapiente explicabo eos qui perspiciatis eligendi. Recusandae, iste!
          Voluptatem, aperiam.
        </p>
      </div>
      <div>
        <Link
          to="/beers/random"
          style={{ display: "block", fontSize: "20px", textDecoration: "none" }}
        >
          Random Beer
        </Link>
        <img src="/random-beer.png" alt="beers" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde
          voluptate voluptas minima quia ut laboriosam consequatur, aut
          distinctio qui?
        </p>
      </div>
      <div>
        <Link
          to="/beers/new"
          style={{ display: "block", fontSize: "20px", textDecoration: "none" }}
        >
          New Beer
        </Link>
        <img src="/random-beer.png" alt="beers" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor
          optio dignissimos eaque ipsum. Amet ducimus ipsa fugit esse nam?
        </p>
      </div>
    </div>
  );
}

export default Home;
