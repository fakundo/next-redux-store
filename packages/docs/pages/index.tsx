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
        <>
          <h3>Pages that load state data themselves:</h3>
          <span>(but they are also statically generated on the server side)</span>
          <hr />
          <ul>
            {list.data?.map(item => (
              <li key={item.name}>
                <Link href={`/${item.name}`}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <h3>Pages with state passed to the page props:</h3>
          <span>(but they are also statically generated on the server side)</span>
          <hr />
          <ul>
            {list.data?.map(item => (
              <li key={item.name}>
                <Link href={`/with-state-in-props/${item.name}`}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      <hr />
      This page is also generated server side. Check the HTML.
    </>
  );
}
