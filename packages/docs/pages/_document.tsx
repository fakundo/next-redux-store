import { makeStore } from 'modules/redux';
import pokemonApi from 'modules/pokemonApi';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { createGetInitialProps } from 'next-redux-store/createGetInitialProps';
import IndexPage from 'pages';
import PokemonPage from './[name]';

const getInitialProps = createGetInitialProps(async appProps => {
  if (!appProps) {
    return undefined;
  }

  const { Component, pageProps } = appProps;
  const store = makeStore();

  switch (Component) {
    case IndexPage: {
      store.dispatch(pokemonApi.endpoints.getPokemonList.initiate({}));
      break;
    }
    case PokemonPage: {
      const { name } = pageProps;
      store.dispatch(pokemonApi.endpoints.getPokemonByName.initiate({ name }));
      break;
    }
  }

  await Promise.all(pokemonApi.util.getRunningOperationPromises());
  return store.getState();
});

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
