import React from 'react';
import styles from "../PokemonCard.module.css";
import { addToPokedex, removeFromPokedex } from '../reducers/PokedexReducer';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export default function PokemonCard({ pokemon }) {
  const { pokemons } = useSelector((state) => state.pokedex);
  const isPokemonMarked = pokemons.find(ele => ele.name == pokemon.name);

  const pokemonImg = getPokemonUrlImageById(pokemon.url);
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
      <div className="cardImageContainer">
        <img src={pokemonImg} alt={pokemon.name} className={styles.cardImage}/>   
      </div>
      
      <figcaption className={styles.cardCaption}>
        <h1 className={styles.cardName}>{pokemon.name.toUpperCase()}</h1>
      </figcaption>
    </figure>
  );
}

function getPokemonUrlImageById(url) {
  const urlElemnts = url.split('/');
  const pokemonId = urlElemnts[urlElemnts.length - 2];
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
  return pokemonImg;
}