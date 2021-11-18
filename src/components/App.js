import { Route, Routes } from "react-router-dom";
import React from "react";
import Beers from "./Beers";



function App() {
  return (
    
     <Routes>
       <Route path="/" element={<Beers />}/>
     </Routes>
    
  );
}

export default App;
