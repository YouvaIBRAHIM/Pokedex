import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "../PokemonCard.module.css";
import { addToPokedex, removeFromPokedex } from '../reducers/PokedexReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonUrlImageAndId } from '../services/Pokemons.service.js';
import PopupAlert from './PopupAlert';

export default function PokemonCard({ pokemon }) {
  const [showPopup, setShowPopup] = useState(false)
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
    setShowPopup(false)
  }
  
  const onToggleBookmark = () => {
    if (isPokemonMarked) {
      setShowPopup(true)
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
      { showPopup &&
          <PopupAlert pokemonName={pokemon.name} onRemoveFromPokedex={onRemoveFromPokedex} setShowPopup={setShowPopup}/>
      }
    </div>
  );
}

