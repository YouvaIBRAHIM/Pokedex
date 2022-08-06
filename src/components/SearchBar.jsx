import styles from "../Terminal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPokemons, clearPokemons } from '../reducers/PokemonsReducer';
import { getPokemons } from '../services/Pokemons.service.js';

const SearchBar = () => {
    const dispatch = useDispatch();
    let { allPokemons } = useSelector((state) => state.pokemons);


    const searchPokemons = (searchValue) => {

        if (searchValue.trim() == "") {
            dispatch(clearPokemons())
            const result = getPokemons();
            
            return result.then(res => {
                dispatch(addPokemons({pokemons: res.pokemons}));
            });
        }

        const pokemons =  allPokemons.filter((pokemon) => {
            const pokemonName = pokemon.name;
            return pokemonName.includes(searchValue)
        }).slice(0, 50);
        dispatch(clearPokemons())
        dispatch(addPokemons({pokemons: pokemons}))

    }
    return (
        <div className={styles.formContainer}>
            <form action="">
                <div className={styles.noise}></div>
                <div className={styles.overlay}></div>
                <div className={styles.terminal}>
                    <span>	&#8811; [WELCOME]</span><br/>
                    <input onChange={(e) => searchPokemons(e.target.value)} className={styles.searchInput} type="search" placeholder='Search...' required/>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;