import Link from 'next/link';
import pokemonApi from 'modules/pokemonApi';

export default function IndexPage() {
  const list = pokemonApi.useGetPokemonListQuery({});
  return (
    <>
      <h1>Pokemons</h1>
      <hr />
      {list.isLoading && <>loading pokemons</>}
      {list.isError && <>loading error</>}
      {list.isSuccess && (
        <ul>
          {list.data?.results.map(item => (
            <li key={item.name}>
              <Link href={`/${item.name}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
      Check HTML of this page.
    </>
  );
}
