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
          <p>
            Pages below load data and fill the store on the client. But if you open them directly,
            data will be hydrated.
          </p>
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
          <p>Pages below get store data from `getStaticProps` mechanism.</p>
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
