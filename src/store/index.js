import { configureStore, combineReducers } from '@reduxjs/toolkit';

import PokemonsReducer from '../reducers/PokemonsReducer';
import PokemonInfosReducer from '../reducers/PokemonInfosReducer';
import PokedexReducer from '../reducers/PokedexReducer';

// combine tous les reducers dans un seul reducer
const rootReducer = combineReducers({
  pokemons: PokemonsReducer,
  pokemonInfos: PokemonInfosReducer,
  pokedex: PokedexReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
