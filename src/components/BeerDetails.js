import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

function BeerDetails() {
    const [beerData, setBeerData] = useState({});
    const params = useParams();

    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then((response) => {
          setBeerData({...response.data});
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    

    
    return (
        <div>
            <Header/>
            <img src={beerData.image_url}/>
            <h1>{beerData.name}</h1>
            <p>{beerData.tagline}</p>
            <p>{beerData.first_brewed}</p>
            <p>{beerData.attenuation_level}</p>
            <p>{beerData.description}</p>
            <p>{beerData.contributed_by}</p>

        </div>
    )
}


export default BeerDetails;