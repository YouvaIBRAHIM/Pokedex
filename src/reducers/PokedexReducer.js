import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalstorage, setToLocalstorage } from "../services/Localstorage.service";

/**
 * verifie si des pokemons ont été enregistré dans le loacalstorage.
 * sinon on initialise à vide le state global.
 */
let initialState;
const pokedexOnLocalStorage = getFromLocalstorage('pokedex');
if (pokedexOnLocalStorage) {
  initialState = pokedexOnLocalStorage
}else{
  initialState = {
    pokemons: [],
    count:0
  };
}

export const PokedexSlice = createSlice({
  name: 'Pokedex',
  initialState,
  reducers: {
    /**
     * Ajoute un pokemon au pokedex et dans le localstorage
     */
    addToPokedex: (state, action) => {
      const pokemon = action.payload.pokemon;
      state.pokemons = [...state.pokemons, pokemon];
      state.count += 1;
      setToLocalstorage('pokedex', JSON.stringify(state));
    },
    /**
    * Supprime un pokemon du pokedex et du localstorage
    */
    removeFromPokedex: (state, action) => {
      state.pokemons = state.pokemons.filter((pokemon) => pokemon.name !== action.payload.pokemon.name);
      state.count -= 1;
      setToLocalstorage('pokedex', JSON.stringify(state));
    },
  },
});


export const { addToPokedex, removeFromPokedex } = PokedexSlice.actions;

export default PokedexSlice.reducer;
