import React, { useEffect } from "react";
import axios from "axios";

function Beers() {

useEffect(() => {

   const resposta = axios.get("https://ih-beers-api2.herokuapp.com/beers").then((resposta) => {
    console.log(resposta);
   
    
    
  })
  .catch((err) => {
    console.log(err);
    
  });
}, [])



    return (
      <div>
        <h1> hello</h1>
      </div>
    );
  }

  export default Beers;