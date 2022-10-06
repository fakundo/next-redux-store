import Link from 'next/link';
import { GetStaticPropsContext } from 'next';
import pokemonApi from 'modules/pokemonApi';
import { makeStore } from 'modules/makeStore';

interface PokemonPageProps {
  name: string;
}

export default function PokemonPage(props: PokemonPageProps) {
  const { name } = props;
  const pokemon = pokemonApi.useGetPokemonByNameQuery({ name });
  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      <Link href="/">
        <a>Go back</a>
      </Link>
      <hr />
      {pokemon.isLoading && <>loading pokemon</>}
      {pokemon.isError && <>loading error</>}
      {pokemon.isSuccess && (
        <>
          <h2>{pokemon.data.name}</h2>
          <img src={pokemon.data.image} alt={pokemon.data.name} />
        </>
      )}
      <hr />
      This page is also generated server side. Check the HTML.
    </>
  );
}

export async function getStaticPaths() {
  const store = makeStore();
  const list = await store.dispatch(pokemonApi.endpoints.getPokemonList.initiate({}));
  const paths = list.data?.map(item => ({ params: { name: item.name } }));
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(ctx: GetStaticPropsContext) {
  const { params } = ctx;
  const name = params?.name as string;
  return {
    props: {
      name,
    },
  };
}
