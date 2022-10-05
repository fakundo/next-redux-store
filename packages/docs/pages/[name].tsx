import Link from 'next/link';
import { GetStaticPropsContext } from 'next';
import pokemonApi from 'modules/pokemonApi';
import Image from 'next/image';
import { makeStore } from 'modules/redux';

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
          <Image
            src={pokemon.data.sprites.front_default}
            alt={pokemon.data.name}
            height={96}
            width={96}
          />
        </>
      )}
      <hr />
      Check HTML of this page.
    </>
  );
}

export async function getStaticPaths() {
  const store = makeStore();
  const list = await store.dispatch(pokemonApi.endpoints.getPokemonList.initiate({}));
  const paths = list.data?.results.map(item => ({ params: { name: item.name } }));
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(ctx: GetStaticPropsContext) {
  const { params } = ctx;
  const { name } = params || {};
  return {
    props: {
      name,
    },
  };
}
