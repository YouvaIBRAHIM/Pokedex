import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from "./Pokeball";
import pokemonLogoImage from "../assets/pokemon.png";

import { useSelector } from 'react-redux';
import styles from "../Banner.module.css";
function Banner() {

  const { count } = useSelector((state) => state.pokedex);

  return (
    <header>
      <h1 className={styles.mainTitle}>
        <Link to="/"><img className={styles.pokemonLogoImage} src={pokemonLogoImage} alt="logo" /></Link>
      </h1>

      <div style={{ display: 'flex' }}>
        <div className={styles.menuItem}>
          <Pokeball/>
          <Link to="/pokedex">
            <strong>{count}</strong> Pokédex
          </Link>
        </div>
      </div>
    </header>
  );
}


export default Banner;
