import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Pokedex from './views/Pokedex';
import Banner from './components/Banner';

function App() {

  // console.log(scrollTop);

  // if (scrollPosition === document.getElementById('root').clientHeight) {
  //   console.log(scrollPosition);
  // }
  return (
    <BrowserRouter>
      <div>
        <Banner />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;