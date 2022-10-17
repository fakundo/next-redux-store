import { GetStaticPropsContext } from 'next';
import pokemonApi from 'modules/pokemonApi';
import { makeStore } from 'modules/makeStore';
import { serverSideState } from 'next-redux-store/server';
import PokemonPage, { getStaticPaths } from '../[name]';

export default function PokemonPageWSP(props: any) {
  return <PokemonPage {...props} />;
}

export { getStaticPaths };

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { params } = ctx;
  const name = params?.name as string;

  const store = makeStore();
  await store.dispatch(pokemonApi.endpoints.getPokemonByName.initiate({ name }));
  const initialState = store.getState();

  return {
    props: {
      name,
      ...serverSideState(initialState),
    },
  };
}
