import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "../styles/PokemonCard.module.css";
import { addToPokedex, removeFromPokedex } from '../reducers/PokedexReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonUrlImageAndId } from '../services/Pokemons.service.js';
import PopupAlert from './PopupAlert';

export default function PokemonCard({ pokemon }) {
  const [showPopup, setShowPopup] = useState(false)
  const { pokemons } = useSelector((state) => state.pokedex);

  // verifie si le pokemon se trouve dans le pokedex
  const isPokemonSelected = pokemons.find(ele => ele.name == pokemon.name);

  const pokemonImg = getPokemonUrlImageAndId(pokemon.url).img;
  const pokemonId = getPokemonUrlImageAndId(pokemon.url).id;
  const dispatch = useDispatch();

  /**
   * ajoute le pokemon dans le pokedex
   */
  const onAddToPokedex = () => {
    dispatch(addToPokedex({pokemon: pokemon}));
  }

  /**
   * supprime le pokemon du pokedex
   */
  const onRemoveFromPokedex = () => {
    dispatch(removeFromPokedex({pokemon: pokemon}));
    setShowPopup(false)
  }
  
/**
 * si le pokemon est déjà dans le pokedex, on affiche une pop up pour confirmer la suppression, sinon on l'ajoute dans le pokedex
 */
  const onToggleCardButton = () => {
    if (isPokemonSelected) {
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
      <button onClick={onToggleCardButton} className={isPokemonSelected ? `${styles.buttonbottomPicture} ${styles.release}` : `${styles.buttonbottomPicture} ${styles.catched}`}>{isPokemonSelected ? "RELEASE" : "CATCH"}</button>
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

