# next-redux-store

[![npm](https://img.shields.io/npm/v/next-redux-store.svg)](https://www.npmjs.com/package/next-redux-store)

Next integration with Redux.

Features:
- state can be passed to the client once on the first render
- it's also possible to load page-level state between page transitions
- uses HYDRATE action only for pages that contain state in their props
- SSG and SSR work great

## Installation
  
```
npm i next-redux-store
```

## Demo

[Demo with RTK Query](https://fakundo.github.io/next-redux-store/)
/
[Source](https://github.com/fakundo/next-redux-store/blob/master/packages/docs)

## Usage

1. Configure your [custom App](https://nextjs.org/docs/advanced-features/custom-app) to use Redux store

```js
import { AppProps } from 'next/app';
import { StoreProvider } from 'next-redux-store';
import { makeStore } from 'modules/makeStore';

export default function _App(appProps: AppProps<any>) {
  const { Component, pageProps } = appProps;
  return (
    <StoreProvider makeStore={makeStore} appProps={appProps}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
```

> **_NOTE:_** makeStore must accept preloadedState as an argument.
See [example](https://github.com/fakundo/next-redux-store/blob/master/packages/docs/modules/makeStore.ts#L4).

2. Configure your [custom Document](https://nextjs.org/docs/advanced-features/custom-document) to provide initial state for the App

```js
import { createGetInitialProps } from 'next-redux-store/server';
import { makeStore } from 'modules/makeStore';

const getInitialState = async (ctx, appProps) => {
  const store = makeStore();
  // Fill the store considering the App props and Document context
  // See example (https://github.com/fakundo/next-redux-store/blob/master/packages/docs/pages/_document.tsx#L14)
  return store.getState();
}

export default class _Document extends Document {
  static getInitialProps = createGetInitialProps(getInitialState);

  render() {
    ...
  }
}
```

3. Optional if you also would like to load state data for some pages within their props (just like [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper) works), you can return that state inside getStaticPaths / getServerSideProps functions. That state will be populated to the store with HYDRATE action. So do not forget to configure reducers to handle it. See [example](https://github.com/fakundo/next-redux-store/blob/master/packages/docs/modules/pokemonApi.ts#L27).

```js
import { serverSideState } from 'next-redux-store/server';

export const getStaticProps = async () => {
  const store = makeStore();
  // Fill the store
  const initialState = store.getState();
  return {
    props: {
      ...serverSideState(initialState),
    },
  };
}
```

## API

`import { StoreProvider } from 'next-redux-store'`

```ts
import { ProviderProps } from 'react-redux';
interface StoreProviderProps extends Omit<ProviderProps, 'store'> {
  appProps: AppProps<any>;
  makeStore: (preloadedState: any | undefined) => any;
}
declare class StoreProvider extends Component<StoreProviderProps> {}
```

`import { createGetInitialProps } from 'next-redux-store/server';`

Function createGetInitialProps creates a function that returns initial props for the Document, providing initial state of the store for the App.

```ts
type CreateInitialState = (ctx: DocumentContext, appProps: AppProps<any> | undefined) => any;
const createGetInitialProps: (createInitialState: CreateInitialState) => (ctx: DocumentContext) => DocumentInitialProps;
```

Function createInitialState accepts Document context and App props as parameters and returns initial state of the store.

`import { serverSideState } from 'next-redux-store/server';`

Function serverSideState accepts state of the store and returns page props.

`import { HYDRATE } from 'next-redux-store';`

HYDRATE returns name of the hydration action.

## License

MIT
