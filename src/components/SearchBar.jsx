import styles from "../styles/Terminal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPokemons, clearPokemons } from '../reducers/PokemonsReducer';
import { getPokemons } from '../services/Pokemons.service.js';

const SearchBar = ({enableNextResult}) => {
    const dispatch = useDispatch();
    let { allPokemons } = useSelector((state) => state.pokemons);


    const searchPokemons = (searchValue) => {

        if (searchValue.trim() == "") {
            enableNextResult.current = true;
            dispatch(clearPokemons())
            const result = getPokemons();
            
            return result.then(res => {
                dispatch(addPokemons({pokemons: res.pokemons}));
            });
        }
        
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