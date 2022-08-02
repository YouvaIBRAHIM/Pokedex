import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  count:0
};


export const PokedexSlice = createSlice({
  name: 'Pokedex',
  initialState,
  reducers: {
    addToPokedex: (state, action) => {
      const pokemon = action.payload.pokemon;
      state.pokemons = [...state.pokemons, pokemon];
      state.count = state.count + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPokedex } = PokedexSlice.actions;

export default PokedexSlice.reducer;
