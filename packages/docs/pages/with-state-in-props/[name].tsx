import { GetStaticPropsContext } from 'next';
import pokemonApi from 'modules/pokemonApi';
import { makeStore } from 'modules/redux';
import { serverSideState } from 'next-redux-store/server';
import PokemonPage, { getStaticPaths } from '../[name]';

export default PokemonPage;

export { getStaticPaths };

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { params } = ctx;
  const name = params?.name as string;

  const store = makeStore();
  store.dispatch(pokemonApi.endpoints.getPokemonByName.initiate({ name }));
  await Promise.all(pokemonApi.util.getRunningOperationPromises());
  const initialState = store.getState();

  return {
    props: {
      name,
      ...serverSideState(initialState),
    },
  };
}
