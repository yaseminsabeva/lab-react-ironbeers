import React, { useState } from "react";
import axios from "axios";

function NewBeer() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    const { data } = await axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      formData
    );
    setLoading(false);
    setFormData({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
    });
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />

        <label htmlFor="tagline">Tagline: </label>
        <input
          id="tagline"
          type="text"
          value={formData.tagline}
          onChange={(e) => {
            setFormData({ ...formData, tagline: e.target.value });
          }}
        />

        <label htmlFor="description">Description: </label>
        <input
          id="description"
          type="text"
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        />

        <label htmlFor="first_brewed">First Brewed: </label>
        <input
          id="first_brewed"
          type="text"
          value={formData.first_brewed}
          onChange={(e) => {
            setFormData({ ...formData, first_brewed: e.target.value });
          }}
        />

        <label htmlFor="brewers_tips">Brewers Tips: </label>
        <input
          id="brewers_tips"
          type="text"
          value={formData.brewers_tips}
          onChange={(e) => {
            setFormData({ ...formData, brewers_tips: e.target.value });
          }}
        />

        <label htmlFor="attenuation_level">Atteniuation Level: </label>
        <input
          id="attenuation_level"
          type="number"
          value={formData.attenuation_level}
          onChange={(e) => {
            setFormData({ ...formData, attenuation_level: e.target.value });
          }}
        />

        <label htmlFor="contributed_by">Contributed by: </label>
        <input
          id="contributed_by"
          type="text"
          value={formData.contributed_by}
          onChange={(e) => {
            setFormData({ ...formData, contributed_by: e.target.value });
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
