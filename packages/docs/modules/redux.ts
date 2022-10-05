import { configureStore, PreloadedState } from '@reduxjs/toolkit';
export { Provider } from 'react-redux';
import pokemonApi from './pokemonApi';

export const makeStore = (preloadedState?: PreloadedState<any>) =>
  configureStore({
    preloadedState,
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: gDM => gDM().concat(pokemonApi.middleware),
  });
