import { useEffect, useState, useRef } from "react";
import PokemonsList from '../components/PokemonsList';
import { getPokemons } from '../services/Pokemons';
import { useSelector, useDispatch } from 'react-redux';
import { addPokemons } from '../reducers/PokemonsReducer';


function Home() {
  let { pokemons, nextUrl } = useSelector((state) => state.pokemons);
  // const [next, setNext] = useState(nextUrl);

  const next = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const result = getPokemons();
    result.then(res => {
        dispatch(addPokemons(res));
        console.log('Newnext url',res.nextUrl)
        next.current = res.nextUrl;
    });


    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  function onScroll (e) {
    let positionAscenseur = Math.ceil(window.scrollY);
    let hauteurDocument = document.documentElement.scrollHeight;
    let hauteurFenetre = window.innerHeight;
    
    if (positionAscenseur >= hauteurDocument - hauteurFenetre) {
      const result = getPokemons(next.current);
      result.then(res => {
        dispatch(addPokemons(res));
        console.log('new next ', res.nextUrl)
        next.current = res.nextUrl;
      })
    }
  }

  return <div>{pokemons && <PokemonsList pokemons={pokemons} />}</div>;
}

export default Home;
