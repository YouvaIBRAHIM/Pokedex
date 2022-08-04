import { useState, useEffect } from 'react';
import axios from 'axios';

export async function getPokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/') {
  const { data } = await axios.get(API_ENDPOINT);

  return {
            pokemons: data.results, 
            nextUrl: data.next
          };
}

export async function getAllPokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=649') {
  const { data } = await axios.get(API_ENDPOINT);

  return {
            pokemons: data.results, 
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

export function getPokemonSpeciesById(id) {
  const [result, setResult] = useState(null);
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

  useEffect(() => {
      async function fetchData() {
          const { data } = await axios.get(url);
          setResult(data);
      }
      fetchData();
  }, []); 

  return result;
}

export async function getPokemonEvolution(url) {
  const { data } = await axios.get(url);
  if (data) {
      const from = {
        name: data.chain.species.name,
        img: getPokemonUrlImageAndId(data.chain.species.url).img
      }
      const to = {
        name: data.chain.evolves_to[0].evolves_to[0]  ? data.chain.evolves_to[0].evolves_to[0].species.name : data.chain.evolves_to[0].species.name,
        img: data.chain.evolves_to[0].evolves_to[0] ? getPokemonUrlImageAndId(data.chain.evolves_to[0].evolves_to[0].species.url).img : getPokemonUrlImageAndId(data.chain.evolves_to[0].species.url).img
      }
      return {
        from: from,
        to: to
      };
    
  }
}

export function getPokemonUrlImageAndId(url) {
  const urlElemnts = url.split('/');
  const pokemonId = urlElemnts[urlElemnts.length - 2];
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
  return {
    id: pokemonId,
    img: pokemonImg
  };
}

