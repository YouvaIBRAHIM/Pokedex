import { useParams } from 'react-router-dom';
import { getPokemonInfosById, getPokemonSpeciesById } from '../services/Pokemons';
import PokemonDetailHeader from "../components/PokemonDetailHeader";
import PokemonDetailSwiper from "../components/PokemonDetailSwiper";

const PokemonDetail = () => {
    const {id} = useParams();
    const pokemonInfos = getPokemonInfosById(id);
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    const pokemonSpecies = getPokemonSpeciesById(id)
    return (
        <div>
            <PokemonDetailHeader pokemonName={pokemonInfos.name} pokemonImage={pokemonImage}/>
            <PokemonDetailSwiper pokemonInfos={pokemonInfos} pokemonSpecies={pokemonSpecies}/>
        </div>
    );
};

export default PokemonDetail;