import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  nextUrl: 'https://pokeapi.co/api/v2/pokemon/'
};

export const PokemonsSlice = createSlice({
  name: 'Pokemons',
  initialState,
  reducers: {
    addPokemons: (state, action) => {
      state.pokemons = [ ...state.pokemons, ...action.payload.pokemons];
      state.nextUrl = action.payload.nextUrl;
    },
  },
});

export const { addPokemons } = PokemonsSlice.actions;
export default PokemonsSlice.reducer;
