import { useEffect, useState, useRef } from "react";
import PokemonsList from '../components/PokemonsList';
import { getPokemons } from '../services/Pokemons';
import { useSelector, useDispatch } from 'react-redux';
import { addPokemons } from '../reducers/PokemonsReducer';


function Home() {
  let { pokemons, nextUrl } = useSelector((state) => state.pokemons);
  const [next, setNext] = useState(nextUrl);
  const listInnerRef = useRef();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setNext(nextUrl);
  // }, [nextUrl]);

  useEffect(() => {
    const result = getPokemons();
    result.then(res => {
        dispatch(addPokemons(res));
    })
    
    console.log(nextUrl);
    if (listInnerRef.current) {
      window.addEventListener('scroll', e => {
        let positionAscenseur = Math.ceil(window.scrollY);
        let hauteurDocument = document.documentElement.scrollHeight;
        let hauteurFenetre = window.innerHeight;
        
        if (positionAscenseur >= hauteurDocument - hauteurFenetre) {
          console.log(next);
          const result = getPokemons(nextUrl);
          result.then(res => {
            dispatch(addPokemons(res));
          })
        }
      })
    }
    
  }, [next]);


  return <div ref={listInnerRef}>{pokemons && <PokemonsList pokemons={pokemons} />}</div>;
}

export default Home;
