import React from 'react';
import PokemonsList from '../components/PokemonsList';
import { useSelector } from 'react-redux';
import styles from "../styles/Terminal.module.css";

function Pokedex() {
  const { pokemons } = useSelector((state) => state.pokedex);
  
  return (
      <div>
        <div className={styles.pokedexTitleContainer}>
          <div className={styles.pokedexTerminalContainer}>
            <div className={styles.noise}></div>
            <div className={styles.overlay}></div>
            <div className={`${styles.terminal} ${styles.pokedexTerminal}`}>
                <span>	&#8811; [YOUR POKEDEK]</span><br/>
            </div>
          </div>
        </div>
        {pokemons && <PokemonsList pokemons={pokemons} />}
      </div>
    );
}

export default Pokedex;
