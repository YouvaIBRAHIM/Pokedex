import { useEffect, useRef, useState } from "react";
import PokemonsList from '../components/PokemonsList';
import SearchBar from "../components/SearchBar";
import { getPokemons, getAllPokemons } from '../services/Pokemons.service.js';
import { useSelector, useDispatch } from 'react-redux';
import { addPokemons, addAllPokemons } from '../reducers/PokemonsReducer';


function Home() {
  const dispatch = useDispatch();
  let { pokemons, allPokemons, nextUrl } = useSelector((state) => state.pokemons);
  const enableNextResult  = useRef(true);

  const next = useRef();

  useEffect(() => {
    if (allPokemons == null) {
      const allPokemonsResult = getAllPokemons();
      allPokemonsResult.then(res => {
        dispatch(addAllPokemons({allPokemons: res.pokemons }))
      });
    }
    const result = getPokemons(nextUrl);
    result.then(res => {
        dispatch(addPokemons(res));
        next.current = res.nextUrl;
    });

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  
  function onScroll (e) {
    let positionAscenseur = Math.ceil(window.scrollY);
    let hauteurDocument = document.documentElement.scrollHeight;
    let hauteurFenetre = window.innerHeight;

    if ((positionAscenseur >= hauteurDocument - hauteurFenetre) && enableNextResult.current) {
      const result = getPokemons(next.current);
      result.then(res => {
        dispatch(addPokemons(res));
        next.current = res.nextUrl;
      })
    }
  }

  return (
    <div>
      <SearchBar enableNextResult={enableNextResult} />
      {pokemons && <PokemonsList pokemons={pokemons} />}
    </div>);
}

export default Home;
