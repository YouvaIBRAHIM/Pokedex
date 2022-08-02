import { useParams } from 'react-router-dom';
import { getPokemonInfosById } from '../services/Pokemons';

const PokemonDetail = () => {
    const {id} = useParams();
    const pokemonInfos = getPokemonInfosById(id);
    console.log(pokemonInfos);
    return (
        <div>
            Hello {id}
        </div>
    );
};

export default PokemonDetail;