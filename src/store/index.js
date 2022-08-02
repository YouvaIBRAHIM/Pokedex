import { configureStore, combineReducers } from '@reduxjs/toolkit';

import PokemonsReducer from '../reducers/PokemonsReducer';
import PokedexReducer from '../reducers/PokedexReducer';

const rootReducer = combineReducers({
  pokemons: PokemonsReducer,
  pokedex: PokedexReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
