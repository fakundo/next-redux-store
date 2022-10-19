import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-store';

export interface PokemonListItem {
  name: string;
}

export interface Pokemon {
  name: string;
  image: string;
}

const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonList: builder.query<PokemonListItem[], {}>({
      query: () => 'pokemon',
      transformResponse: ({ results }: any) => results.map(({ name }: any) => ({ name })),
    }),
    getPokemonByName: builder.query<Pokemon, { name: string }>({
      query: queryArg => `/pokemon/${queryArg.name}`,
      transformResponse: ({ name, sprites }: any) => ({ name, image: sprites.front_default }),
    }),
  }),
  // Handler for the HYDRATE action is only required for pages with the state passed to their props
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
});

export default pokemonApi;
