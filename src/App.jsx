import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Pokedex from './views/Pokedex';
import PokemonDetail from './views/PokemonDetail';
import Banner from './components/Banner';
import { initServiceWorker } from "./services/ServiceWorker.service";

function App() {
  //lance le service worker
  initServiceWorker()
  return (
    <BrowserRouter>
      <div>
        <Banner />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;