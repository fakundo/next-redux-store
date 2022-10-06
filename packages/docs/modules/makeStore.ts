import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import pokemonApi from './pokemonApi';

export const makeStore = (preloadedState?: PreloadedState<any>) =>
  configureStore({
    preloadedState,
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: gDM => gDM().concat(pokemonApi.middleware),
  });
