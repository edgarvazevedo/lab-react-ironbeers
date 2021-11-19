import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

function RandomBeer() {
  const [beerData, setBeerData] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setBeerData({ ...response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <img src={beerData.image_url} />
      <h1>{beerData.name}</h1>
      <p>{beerData.tagline}</p>
      <p>{beerData.first_brewed}</p>
      <p>{beerData.attenuation_level}</p>
      <p>{beerData.description}</p>
      <p>{beerData.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
