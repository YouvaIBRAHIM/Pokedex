import React from 'react';
import PokemonCard from './PokemonCard';
import styles from "../styles/PokemonCard.module.css";
import { v4 as uuid } from "uuid";

/**
 * 
 * @param {Array} pokemons tableau de pokemons à afficher
 * @returns une Card pour chaque pokemon
 */
function PokemonsList({ pokemons }) {

  return (
    <div className={styles.pokemonContainer}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={uuid()} pokemon={pokemon}/>
      ))}
    </div>
  );
}

export default PokemonsList;
