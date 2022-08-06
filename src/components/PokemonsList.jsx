import React from 'react';
import PokemonCard from './PokemonCard';
import styles from "../styles/PokemonCard.module.css";

function PokemonsList({ pokemons }) {

  return (
    <div className={styles.pokemonContainer}>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon}/>
      ))}
    </div>
  );
}

export default PokemonsList;
