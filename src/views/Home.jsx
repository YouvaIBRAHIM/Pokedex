import { useEffect, useRef } from "react";
import PokemonsList from '../components/PokemonsList';
import SearchBar from "../components/SearchBar";
import { getPokemons, getAllPokemons } from '../services/Pokemons.service.js';
import { useSelector, useDispatch } from 'react-redux';
import { addPokemons, addAllPokemons } from '../reducers/PokemonsReducer';
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const dispatch = useDispatch();
  let { pokemons, allPokemons, nextUrl } = useSelector((state) => state.pokemons);
  const enableNextResult  = useRef(true);
  const topPageButton  = useRef();

  const next = useRef();

  useEffect(() => {
    if (allPokemons == null) {
      const allPokemonsResult = getAllPokemons();
      allPokemonsResult.then(res => {
        dispatch(addAllPokemons({allPokemons: res.pokemons }))
      });
    }
    const result = getPokemons(nextUrl);
    result.then(res => {
        dispatch(addPokemons(res));
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

    if ((positionAscenseur >= hauteurDocument - hauteurFenetre) && enableNextResult.current) {
      const result = getPokemons(next.current);
      result.then(res => {
        dispatch(addPokemons(res));
        next.current = res.nextUrl;
      })
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topPageButton.current.style.display = "block";
    } else {
      topPageButton.current.style.display = "none";
    }
  }
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <SearchBar enableNextResult={enableNextResult} />
      {pokemons && <PokemonsList pokemons={pokemons} />}
      <button ref={topPageButton} onClick={scrollToTop} className={styles.topPageButton} title="Go to top"><FontAwesomeIcon icon={faArrowUp} /></button>
    </div>);
}

export default Home;
