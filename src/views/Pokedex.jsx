import React from 'react';
import PokemonCard from '../components/PokemonCard';
import PokemonsList from '../components/PokemonsList';
import { useSelector } from 'react-redux';

function Pokedex() {
  const { pokemons } = useSelector((state) => state.pokedex);
  
  return <div>{pokemons && <PokemonsList pokemons={pokemons} />}</div>;
}

export default Pokedex;
