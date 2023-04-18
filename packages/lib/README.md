# next-redux-store

[![npm](https://img.shields.io/npm/v/next-redux-store.svg)](https://www.npmjs.com/package/next-redux-store)

Integration of Next.js with Redux.

Features:
- State can be passed to the client just once on the first render.
- It's also possible to load page-level state data between page transitions.
- SSG and SSR work great.

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

const store = makeStore()

export default function _App(appProps: AppProps<any>) {
  const { Component, pageProps } = appProps;
  return (
    <StoreProvider {...{ store, appProps }}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
```

2. Optionally, configure your [custom Document](https://nextjs.org/docs/advanced-features/custom-document) to provide initial state for the whole app. It will be populated to the store once on the first page render.

```js
import { createGetInitialProps } from 'next-redux-store/server';
import { makeStore } from 'modules/makeStore';

const getInitialState = async (ctx, appProps) => {
  const store = makeStore();
  // Fill the store considering to the arguments: Document context and App props
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

3. Optionally, you can also provide state data for some pages with their props (just like [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper) works). You can return that state inside `getStaticProps` / `getServerSideProps` functions.

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

4. Don't forget to configure your reducers to handle the `HYDRATE` action.

```js
import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-store';

const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  ...
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
});
```

## API

### `import { StoreProvider } from 'next-redux-store'`

```ts
interface StoreProviderProps extends Omit<ProviderProps, 'store'> {
  store: Store<any>;
  appProps: AppProps<any>;
}
declare class StoreProvider extends Component<StoreProviderProps> {}
```

### `import { HYDRATE } from 'next-redux-store';`

HYDRATE returns name of the hydration action.

### `import { createGetInitialProps } from 'next-redux-store/server';`

Function createGetInitialProps accepts a function that takes Document context and App props as parameters and returns the initial state of the store for the whole app.

```ts
type CreateInitialState = (ctx: DocumentContext, appProps: AppProps<any> | undefined) => any;
const createGetInitialProps: (createInitialState: CreateInitialState) => (ctx: DocumentContext) => DocumentInitialProps;
```

### `import { serverSideState } from 'next-redux-store/server';`

Function serverSideState accepts state of the store and returns page props.

## License

MIT
