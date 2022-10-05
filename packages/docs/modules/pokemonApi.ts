import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PokemonListItem {
  name: string;
}

export interface PokemonList {
  results: PokemonListItem[];
}

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonList: builder.query<PokemonList, {}>({
      query: () => 'pokemon',
    }),
    getPokemonByName: builder.query<Pokemon, { name: string }>({
      query: queryArg => `/pokemon/${queryArg.name}`,
    }),
  }),
});

export default pokemonApi;
