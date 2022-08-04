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
    
    <div className={styles.screen}>
      <Link to={`/pokemon/${pokemonId}`}>
      <div className={styles.topPicture}>
        <div className={styles.buttontopPicture1}></div>
        <div className={styles.buttontopPicture2}></div>
      </div>
      <div className={styles.picture}>
        <img src={pokemonImg} alt={pokemon.name} /> 
      </div>
      </Link>
      <button onClick={onToggleBookmark} className={isPokemonMarked ? `${styles.buttonbottomPicture} ${styles.release}` : `${styles.buttonbottomPicture} ${styles.catched}`}>{isPokemonMarked ? "RELEASE" : "CATCH"}</button>
      <div className={styles.speakers}>
        <div className={styles.sp}></div>
        <div className={styles.sp}></div>
        <div className={styles.sp}></div>
        <div className={styles.sp}></div>
      </div>
      <div className={styles.pokemonNameContainer}><h1>{pokemon.name}</h1></div>
    </div>
    
    // <figure className={`${styles.card} ${styles.cardNormal}` }>
    //   <FontAwesomeIcon className={isPokemonMarked ? `${styles.faBookmark} ${styles.faBookmarked}` : styles.faBookmark} onClick={onToggleBookmark} icon={faBookmark} />
    //   <Link to={`/pokemon/${pokemonId}`}>
    //   <div className="cardImageContainer">
    //     <img src={pokemonImg} alt={pokemon.name} className={styles.cardImage}/>   
    //   </div>
      
    //   <figcaption className={styles.cardCaption}>
    //     <h1 className={styles.cardName}>{pokemon.name.toUpperCase()}</h1>
    //   </figcaption>
    //   </Link>
    // </figure>
    
  );
}

