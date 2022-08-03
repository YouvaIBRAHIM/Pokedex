import React from 'react';
import { Link } from "react-router-dom";
import styles from "../PokemonCard.module.css";
import { addToPokedex, removeFromPokedex } from '../reducers/PokedexReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonUrlImageAndId } from '../services/Pokemons.service.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export default function PokemonCard({ pokemon }) {
  const { pokemons } = useSelector((state) => state.pokedex);
  const isPokemonMarked = pokemons.find(ele => ele.name == pokemon.name);

  const pokemonImg = getPokemonUrlImageAndId(pokemon.url).img;
  const pokemonId = getPokemonUrlImageAndId(pokemon.url).id;
  const dispatch = useDispatch();

  const onAddToPokedex = () => {
    dispatch(addToPokedex({pokemon: pokemon}));
  }
  const onRemoveFromPokedex = () => {
    dispatch(removeFromPokedex({pokemon: pokemon}));
  }
  
  const onToggleBookmark = () => {
    if (isPokemonMarked) {
      onRemoveFromPokedex();
    }else{
      onAddToPokedex();
    }
  }
  
  return (
    
    <figure className={`${styles.card} ${styles.cardNormal}` }>
      <FontAwesomeIcon className={isPokemonMarked ? `${styles.faBookmark} ${styles.faBookmarked}` : styles.faBookmark} onClick={onToggleBookmark} icon={faBookmark} />
      <Link to={`/pokemon/${pokemonId}`}>
      <div className="cardImageContainer">
        <img src={pokemonImg} alt={pokemon.name} className={styles.cardImage}/>   
      </div>
      
      <figcaption className={styles.cardCaption}>
        <h1 className={styles.cardName}>{pokemon.name.toUpperCase()}</h1>
      </figcaption>
      </Link>
    </figure>
    
  );
}

