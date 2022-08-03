import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemonInfos: [],
  pokemonSpecies: null,
  pokemonEvo: null
};

export const PokemonInfosSlice = createSlice({
  name: 'PokemonInfos',
  initialState,
  reducers: {
    setPokemonInfos: (state, action) => {
      state.pokemonInfos = action.payload.pokemonInfos;
      state.pokemonSpecies = action.payload.pokemonSpecies;
      state.pokemonEvo = action.payload.pokemonEvo;  
    },
  },
});

export const { setPokemonInfos } = PokemonInfosSlice.actions;
export default PokemonInfosSlice.reducer;
