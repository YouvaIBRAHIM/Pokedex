import { useEffect, useRef, useState } from "react";
import PokemonsList from '../components/PokemonsList';
import SearchBar from "../components/SearchBar";
import Pokeball from "../components/Pokeball";
import { getPokemons, getAllPokemons } from '../services/Pokemons.service.js';
import { useSelector, useDispatch } from 'react-redux';
import { addPokemons, addAllPokemons } from '../reducers/PokemonsReducer';
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const dispatch = useDispatch();
  let { pokemons, allPokemons, nextUrl } = useSelector((state) => state.pokemons);
  let [isLoading, setIsLoading] = useState(true)
  let [isNextResultLoading, setIsNextResultLoading] = useState(false)
  
  const enableNextResult = useRef(true);
  const topPageButton  = useRef();
  const next = useRef();

  useEffect(() => {
    // si tous les pokemons ne sont pas déjà stockés dans le localstorage, on les récuère une seule fois
    if (allPokemons == null) {
      try {
        const allPokemonsResult = getAllPokemons();
        allPokemonsResult.then(res => {
          dispatch(addAllPokemons({allPokemons: res.pokemons }))
        });
      } catch (error) {
        console.log(error);
      }
    }
    
    // récupère les pokemons à afficher
    try {
      const result = getPokemons(nextUrl);
      result.then(res => {
        setIsLoading(false)
        dispatch(addPokemons(res));
        next.current = res.nextUrl;
      });
    } catch (error) {
      console.log(error);
    }
    
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  /**
   * verifie si on est en bas de la page pour récupèrer la suite des pokemons à afficher
   * verifie également si l'utilisateur scroll vers le bas pour faire apparaitre le bouton permettant de remonter en haut de la page
   */
  function onScroll () {
    let scrollY = Math.ceil(window.scrollY);
    let documentHeight = document.documentElement.scrollHeight;
    let innerHeight = window.innerHeight;

    if ((scrollY >= documentHeight - innerHeight) && enableNextResult.current) {
      setIsNextResultLoading(true)
      const result = getPokemons(next.current);
      result.then(res => {
        setIsNextResultLoading(false)
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

  /**
   * fait remonter en haut de la page
   */
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <SearchBar enableNextResult={enableNextResult} />
      {
        //affiche un loader tant que les pokemons ne sont pas récupèrés 
        isLoading &&
        <div className={styles.loaderContainer}>
          <Pokeball loader={true}/>
        </div>
      }
      {pokemons && <PokemonsList pokemons={pokemons} />}
      <button ref={topPageButton} onClick={scrollToTop} className={styles.topPageButton} title="Go to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      {
        // affiche un loader en arrivant en bas de la page puis disparait quand la suite des pokèmons à afficher sont récupérés
        isNextResultLoading &&
        <div className={styles.loaderContainer}>
          <Pokeball loader={true}/>
        </div>
      }
    </div>);
}

export default Home;
