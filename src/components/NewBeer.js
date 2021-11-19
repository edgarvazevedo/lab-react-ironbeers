import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from 'react';
import Header from './Header';

function NewBeer() {

  const navigate = useNavigate();
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  });

  function handleChange(event) {
    setNewBeer({
      ...newBeer,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
      navigate("/");
    } catch (error) {
      console.error(error.response.data);
    }
  }

  return (
    <div>
      <Header />

      <form>
        <div className="d-flex justify-content-center align-item-center">
        <div className="mb-3 w-25">
        <label className="form-label" htmlFor="name">Name: </label>
        <input
          className="form-control"
          id="name"
          value={newBeer.name}
          type="text"
          onChange={handleChange}
          name="name"
        />

        <label className="form-label" htmlFor="tagline">Tagline</label>
        <input
          className="form-control"
          id="tagline"
          value={newBeer.tagline}
          type="text"
          onChange={handleChange}
          name="tagline"
        />

        <label className="form-label" htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          value={newBeer.description}
          type="text"
          onChange={handleChange}
          name="description"
        />

        <label className="form-label" htmlFor="first_brewed">First Brewed</label>
        <input
          className="form-control"
          id="first_brewed"
          value={newBeer.first_brewed}
          type="text"
          onChange={handleChange}
          name="first_brewed"
        />

        <label className="form-label" htmlFor="brewers_tips">Brewers Tips</label>
        <input
          className="form-control"
          id="brewers_tips"
          value={newBeer.brewers_tips}
          type="text"
          onChange={handleChange}
          name="brewers_tips"
        />

        <label className="form-label" htmlFor="attenuation_level">Attenuation Level</label>
        <input
          className="form-control"
          id="attenuation_level"
          value={newBeer.attenuation_level}
          type="number"
          onChange={handleChange}
          name="attenuation_level"
        />

        <label className="form-label" htmlFor="contributed_by ">Contributed By</label>
        <input
          className="form-control"
          id="contributed_by "
          value={newBeer.contributed_by}
          type="text"
          onChange={handleChange}
          name="contributed_by"
        />

        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
          ADD NEW
        </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default NewBeer;