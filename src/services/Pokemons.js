import { useState, useEffect } from 'react';
import axios from 'axios';

export async function getPokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/') {
  const { data } = await axios.get(API_ENDPOINT);

  return {
            pokemons: data.results, 
            nextUrl: data.next
          };
}

export function getPokemonInfosById(id) {
  const [result, setResult] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
      async function fetchData() {
          const { data } = await axios.get(url);
          setResult(data);
      }
      fetchData();
  }, []); 

  return result;
}