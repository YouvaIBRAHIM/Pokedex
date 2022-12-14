import { useSelector } from 'react-redux';
import styles from "../styles/PokemonDetail.module.css";
import arrowImage from "../assets/arrow.png";

/**
 * 
 * @returns l'evolution du pokemon
 */
const PokemonEvolution = () => {
    const {pokemonEvo} = useSelector((state) => state.pokemonInfos);

    return (
        <>
            <div className={styles.evolutionContainer}>
                <div className={styles.from}>
                    <img src={pokemonEvo && pokemonEvo.from.img} alt={pokemonEvo && pokemonEvo.from.name} />
                    <h2>{pokemonEvo && pokemonEvo.from.name}</h2>
                </div>
                <div className={styles.arrow}>
                    <img src={arrowImage} alt="arrow" />
                </div>
                <div className={styles.to}>
                    <img src={pokemonEvo && pokemonEvo.to.img} alt={pokemonEvo && pokemonEvo.to.name} />
                    <h2>{pokemonEvo && pokemonEvo.to.name}</h2>
                </div>
            </div>
        </>
    );
};

export default PokemonEvolution;