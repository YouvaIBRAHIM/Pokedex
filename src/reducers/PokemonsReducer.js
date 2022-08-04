import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allPokemons: null,
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
    addAllPokemons: (state, action) => {
      state.allPokemons = action.payload.allPokemons;
    },
    clearPokemons: (state) => {
      state.pokemons = [];
      state.nextUrl = 'https://pokeapi.co/api/v2/pokemon/';
    }
  },
});

export const { addPokemons, addAllPokemons, clearPokemons } = PokemonsSlice.actions;
export default PokemonsSlice.reducer;
