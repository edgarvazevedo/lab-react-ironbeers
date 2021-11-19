import React from 'react';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
import {Link} from 'react-router-dom';

function HomePage() {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <Link to="/beer" className="btn btn-primary">
          <img src={beers} className="card-img-top" alt="Beer" />
          <h2 className="card-title">All Beers</h2>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Link>

        <Link to="/randombeer" className="btn btn-primary">
          <img src={randomBeer} className="card-img-top" alt="Random beer" />
          <h2 className="card-title">Random Beer</h2>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Link>

        <Link to="/newbeer" className="btn btn-primary">
          <img src={newBeer} className="card-img-top" alt="Cerveja" />
          <h2 className="card-title">New Beer</h2>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;