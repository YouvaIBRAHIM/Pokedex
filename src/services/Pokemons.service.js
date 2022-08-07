import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * récupère les pokemons à afficher
 * @param {String} API_ENDPOINT url à fetcher
 * @returns un tableau de pokemons avec leur nom et leur url et un l'url de la suite du résult
 */
export async function getPokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/') {
  const { data } = await axios.get(API_ENDPOINT);
  return {
            pokemons: data.results, 
            nextUrl: data.next
          };
}

/**
 * récupère tous les pokemons (limité à 649 pokemons) à filtrer dans la barre de recherche
 * @param {String} API_ENDPOINT  url à fetcher
 * @returns  un tableau de pokemons avec leur nom et leur url et un l'url
 */
export async function getAllPokemons(API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=649') {
  const { data } = await axios.get(API_ENDPOINT);

  return {
            pokemons: data.results, 
          };
}


/**
 * récupère les informations de base d'un pokemon grace à son ID
 */
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

/**
 * récupère les spécificités d'un pokemon grace à son ID
 */
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

/**
 * récupère les évolutions d'un pokemon grace à son ID
 */
export async function getPokemonEvolution(url) {
  const { data } = await axios.get(url);
  if (data) {
      let name = data.chain.species.name
      let url = getPokemonUrlImageAndId(data.chain.species.url).img

      const from = {
        name: name,
        img: getPokemonUrlImageAndId(data.chain.species.url).img
      }

      //on verifie si le pokemon a une 3ème evolution et on la récupère, sinon on récuère la 2ème evolution. S'il n'y a pas d'evolution, on garde la première forme
      if (data.chain.evolves_to[0]) {
        name = data.chain.evolves_to[0].species.name
        url = getPokemonUrlImageAndId(data.chain.evolves_to[0].species.url).img
        if (data.chain.evolves_to[0].evolves_to[0]){
          name = data.chain.evolves_to[0].evolves_to[0].species.name
          url = getPokemonUrlImageAndId(data.chain.evolves_to[0].evolves_to[0].species.url).img
        }
      }
      const to = {
        name: name,
        img: url
      }

      return {
        from: from,
        to: to
      };
    
  }
}

/**
 * récuère l'id et l'image d'un pokemon grace à son url
 * @param {String} url url associée au pokemon
 * @returns un id et une image
 */
export function getPokemonUrlImageAndId(url) {
  const urlElemnts = url.split('/');
  const pokemonId = urlElemnts[urlElemnts.length - 2];
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
  return {
    id: pokemonId,
    img: pokemonImg
  };
}

