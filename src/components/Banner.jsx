import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from "./Pokeball";
import pokemonLogoImage from "../assets/pokemonLogo.png";

import { useSelector } from 'react-redux';
import styles from "../styles/Banner.module.css";
function Banner() {

  const { count } = useSelector((state) => state.pokedex);

  return (
    <header>
      <div className={styles.mainTitle}>
        <Link to="/"><img className={styles.pokemonLogoImage} src={pokemonLogoImage} alt="logo" /></Link>
      </div>

      <div style={{ display: 'flex' }}>
        <div className={styles.menuItem}>
          <Pokeball/>
          <Link to="/pokedex">
            <strong>{count} POKEDEX</strong>
          </Link>
        </div>
      </div>
    </header>
  );
}


export default Banner;
