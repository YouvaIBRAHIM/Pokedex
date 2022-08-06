import styles from "../styles/PokemonDetail.module.css";
import { addToPokedex, removeFromPokedex } from '../reducers/PokedexReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import PopupAlert from './PopupAlert';


export default function PokemonDetailHeader({ pokemonImage }) {
  const { pokemonInfos } = useSelector((state) => state.pokemonInfos);
  const { pokemons } = useSelector((state) => state.pokedex);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  let pokemon, isPokemonMarked;
  const types = [];

  if (pokemonInfos) {
    isPokemonMarked = pokemons.find(ele => ele.name == pokemonInfos.name);
    pokemon = {
      name : pokemonInfos.name,
      url : `https://pokeapi.co/api/v2/pokemon/${pokemonInfos.id}/`
    }
    for (let i = 0; i < pokemonInfos.types.length; i++) {
      const type = pokemonInfos.types[i].type.name;
      types.push(type)
    }
  }

  const onAddToPokedex = () => {
    dispatch(addToPokedex({pokemon: pokemon}));
  }
  const onRemoveFromPokedex = () => {
    dispatch(removeFromPokedex({pokemon: pokemon}));
    setShowPopup(false)
  }
  
  const onToggleBookmark = () => {
    if (isPokemonMarked) {
      setShowPopup(true)
    }else{
      onAddToPokedex();
    }
  }

  const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  return (
    <div className={styles.coverContainer} style={{background: colors[pokemonInfos ? pokemonInfos.types[0].type.name : 'normal']}}>
      <div className={styles.infos}>
        <div className={styles.subInfos}>
          <button onClick={onToggleBookmark} className={isPokemonMarked ? `${styles.buttonbottomPicture} ${styles.release}` : `${styles.buttonbottomPicture} ${styles.catched}`}>{isPokemonMarked ? "RELEASE" : "CATCH"}</button>
          <h1>{pokemonInfos && pokemonInfos.name}</h1>
        </div>
        <div className={styles.subInfos}>
          <h3>#{pokemonInfos && pokemonInfos.id}</h3>
          {pokemonInfos && types.map((type, index) => <h4 key={index} className={styles.type}>{type}</h4>) }
        </div>
      </div>
      <div  className={styles.coverContent}>
        <img src={pokemonImage} alt={pokemonInfos && pokemonInfos.name} />
      </div>
      { showPopup &&
          <PopupAlert pokemonName={pokemonInfos.name} onRemoveFromPokedex={onRemoveFromPokedex} setShowPopup={setShowPopup}/>
      }
    </div>
  )
}