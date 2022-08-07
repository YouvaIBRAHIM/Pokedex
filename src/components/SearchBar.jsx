import styles from "../styles/Terminal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPokemons, clearPokemons } from '../reducers/PokemonsReducer';
import { getPokemons } from '../services/Pokemons.service.js';

/**
 * 
 * @param {Object} enableNextResult permet de disactiver la fonction onScroll qui affiche la suite des pokemon
 * @returns une barre de recherche
 */
const SearchBar = ({enableNextResult}) => {
    const dispatch = useDispatch();
    let { allPokemons } = useSelector((state) => state.pokemons);


    const searchPokemons = (searchValue) => {

        // si le contenu de la recherche est vide, on affiche les premiers pokemon de l'API
        if (searchValue.trim() == "") {
            enableNextResult.current = true;
            dispatch(clearPokemons())
            const result = getPokemons();
            
            return result.then(res => {
                dispatch(addPokemons({pokemons: res.pokemons}));
            });
        }

        //filtre les pokemons contenant dans leur nom la chaine de caractères saisi dans la barre de recherche
        //renvoit un maximum de 50 pokemons
        const pokemons =  allPokemons.filter((pokemon) => {
            const pokemonName = pokemon.name;
            return pokemonName.includes(searchValue.toLowerCase())
        }).slice(0, 50);
        dispatch(clearPokemons())
        enableNextResult.current = false;
        dispatch(addPokemons({pokemons: pokemons}))
        
    }
    return (
        <div className={styles.formContainer}>
            <div className={styles.pokedexTerminalContainer}>
                <div className={styles.noise}></div>
                <div className={styles.overlay}></div>
                <div className={styles.terminal}>
                    <span>	&#8811; [WELCOME]</span><br/>
                    <input onChange={(e) => searchPokemons(e.target.value)} className={styles.searchInput} type="search" placeholder='Search...' required/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;