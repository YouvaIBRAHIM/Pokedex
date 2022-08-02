import { useState, useEffect } from 'react';
import axios from 'axios';
import { addPokemons } from '../reducers/PokemonsReducer';
import { useDispatch } from 'react-redux';

// export function usePokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/') {
//   const dispatch = useDispatch();

//   useEffect(() => {
//       async function fetchData() {
//           const { data } = await axios.get(API_ENDPOINT);
//           dispatch(addPokemons({
//             pokemons: data.results, 
//             nextUrl: data.next
//           }));
//       }
//       fetchData();
//   }, []); 


// }
export async function getPokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/') {
  const { data } = await axios.get(API_ENDPOINT);
  console.log(data.results);
  return {
            pokemons: data.results, 
            nextUrl: data.next
          };
}

