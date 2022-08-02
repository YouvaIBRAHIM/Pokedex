import { useEffect, useState, useRef } from "react";
import PokemonsList from '../components/PokemonsList';
import { getPokemons } from '../services/Pokemons';
import { useSelector, useDispatch } from 'react-redux';
import { addPokemons } from '../reducers/PokemonsReducer';


function Home() {
  const { pokemons, nextUrl } = useSelector((state) => state.pokemons);
  const [next, setNext] = useState(nextUrl);
  const listInnerRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const result = getPokemons();
    console.log(result);
    dispatch(addPokemons(result));
      
      if (listInnerRef.current) {
        window.addEventListener('scroll', e => {
          let positionAscenseur = Math.ceil(window.scrollY);
          let hauteurDocument = document.documentElement.scrollHeight;
          let hauteurFenetre = window.innerHeight;
          
          if (positionAscenseur >= hauteurDocument - hauteurFenetre) {
            dispatch(addPokemons(getPokemons(next)));

            // getPokemons(next);
          }
        })
      }
  }, [next]);

  
  return <div ref={listInnerRef}>{pokemons && <PokemonsList pokemons={pokemons} />}</div>;
}

export default Home;
