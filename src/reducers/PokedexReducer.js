import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalstorage, setToLocalstorage } from "../services/Localstorage.service";

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
    addToPokedex: (state, action) => {
      const pokemon = action.payload.pokemon;
      state.pokemons = [...state.pokemons, pokemon];
      state.count += 1;
      setToLocalstorage('pokedex', JSON.stringify(state));
    },
    removeFromPokedex: (state, action) => {
      state.pokemons = state.pokemons.filter((pokemon) => pokemon.name !== action.payload.pokemon.name);
      state.count -= 1;
      setToLocalstorage('pokedex', JSON.stringify(state));
    },
    syncWithLocaleStorage: (state, action) => {
      if (action.payload) {
        state = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPokedex, removeFromPokedex, syncWithLocaleStorage } = PokedexSlice.actions;

export default PokedexSlice.reducer;
