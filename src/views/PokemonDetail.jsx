import { useParams } from 'react-router-dom';
import { getPokemonInfosById, getPokemonSpeciesById, getPokemonEvolution } from '../services/Pokemons.service.js';
import { useDispatch } from 'react-redux';
import { setPokemonInfos } from '../reducers/PokemonInfosReducer';
import PokemonDetailHeader from "../components/PokemonDetailHeader";
import PokemonDetailTabs from "../components/PokemonDetailTabs";

const PokemonDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const pokemonInfos = getPokemonInfosById(id);
    const pokemonSpecies = getPokemonSpeciesById(id)
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    if (pokemonSpecies) {
        const result = getPokemonEvolution(pokemonSpecies.evolution_chain.url);
        result.then(pokemonEvo => {
           if (pokemonInfos && pokemonSpecies && pokemonEvo) {
                dispatch(setPokemonInfos({pokemonInfos: pokemonInfos, pokemonSpecies: pokemonSpecies, pokemonEvo: pokemonEvo}))
            } 
        })
        
    }
    return (
        <div>
            <PokemonDetailHeader pokemonName={pokemonInfos.name} pokemonImage={pokemonImage}/>
            <PokemonDetailTabs />
        </div>
    );
};

export default PokemonDetail;