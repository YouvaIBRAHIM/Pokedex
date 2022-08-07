import { createSlice } from '@reduxjs/toolkit';

// State globale qui représente les données d'un pokemon
const initialState = {
  pokemonInfos: null,
  pokemonSpecies: null,
  pokemonEvo: null
};

export const PokemonInfosSlice = createSlice({
  name: 'PokemonInfos',
  initialState,
  reducers: {
    /**
     * stocke les données d'un pokemon dans le state global
     */
    setPokemonInfos: (state, action) => {
      state.pokemonInfos = action.payload.pokemonInfos;
      state.pokemonSpecies = action.payload.pokemonSpecies;
      state.pokemonEvo = action.payload.pokemonEvo;  
    },
  },
});

export const { setPokemonInfos } = PokemonInfosSlice.actions;
export default PokemonInfosSlice.reducer;
