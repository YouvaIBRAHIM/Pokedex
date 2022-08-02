import React from 'react';
import styles from "../PokemonCard.module.css";
  import { addToPokedex } from '../reducers/PokedexReducer';
  import { useDispatch } from 'react-redux';

export default function PokemonCard({ pokemon }) {
  const pokemonImg = getPokemonUrlImageById(pokemon.url);
  const dispatch = useDispatch();

  const onAddToPokedex = () => {
    dispatch(addToPokedex({pokemon: pokemon}));
  }
  
  return (
    <figure className={`${styles.card} ${styles.cardNormal}` }>
      <div className="cardImageContainer">
        <img src={pokemonImg} alt={pokemon.name} className={styles.cardImage}/>   
      </div>
      
      <figcaption className={styles.cardCaption}>
        <h1 className={styles.cardName}>{pokemon.name.toUpperCase()}</h1>
      </figcaption>
      <button onClick={onAddToPokedex}>Ajouter</button>
    </figure>
  );
}

function getPokemonUrlImageById(url) {
  const urlElemnts = url.split('/');
  const pokemonId = urlElemnts[urlElemnts.length - 2];
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
  return pokemonImg;
}