import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Beer.css';
import Header from './Header';

function Beer() {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeerData([...response.data]);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
<Header/>
      <div >
        {beerData.map((currentBeer) => {
          return (
            <div className="container">
              <div>
                  <Link to={`/beer/${currentBeer._id}`}>
                  <img className="img" src={currentBeer.image_url} />
                  </Link>

              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2>{currentBeer.name}</h2>
                  <p>{currentBeer.tagline}</p>
                  <p>{currentBeer.contributed_by}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */
}

export default Beer;
