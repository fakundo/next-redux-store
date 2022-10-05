# next-redux-store

[![npm](https://img.shields.io/npm/v/next-redux-store.svg)](https://www.npmjs.com/package/next-redux-store)

Next integration with Redux.

Features:
- state data is passed to the client once when rendering the first page
- does not load state data between page transitions
- does not use the HYDRATE action, instead uses preloadedState to configure the store
- SSG and SSR work great

## Installation
  
```
npm i next-redux-store
```

## Demo

[Demo with RTK Query](https://fakundo.github.io/next-redux-store/)
/
[Source](https://github.com/fakundo/next-redux-store/tree/master/packages/docs)

## Usage

1. Configure your [custom App](https://nextjs.org/docs/advanced-features/custom-app) to use Redux store

```js
import { makeStore, Provider } from 'modules/redux';
import { createUseStore } from 'next-redux-store';
import { AppProps } from 'next/app';

// Note that makeStore must accept preloadedState as an argument
const useStore = createUseStore(makeStore);

export default function _App({ Component, pageProps, ...rest }: AppProps<any>) {
  const store = useStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
```

2. Configure your [custom Document](https://nextjs.org/docs/advanced-features/custom-document) to provide initial state for the App

```js
import { makeStore } from 'modules/redux';
import { createGetInitialProps } from 'next-redux-store/createGetInitialProps';

const getInitialState = async (appProps, ctx) => {
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

## API

### createUseStore

createUseStore creates a React hook that returns a Redux store.
It accepts a store creation function with a preloadedState as parameter. The hook accepts App props.

```ts
type MakeStore = (preloadedState?: any | undefined) => Store;
const createUseStore: (makeStore: MakeStore) => (appProps: AppProps<any>) => Store;
```

### createGetInitialProps

createGetInitialProps creates a function that returns initial props for the Document, providing initialState of store for the App.

```typescri
type CreateInitialState = (appProps?: AppProps<any> | undefined, ctx?: DocumentContext) => any;
const createGetInitialProps: (createInitialState: CreateInitialState) => (ctx: DocumentContext) => DocumentInitialProps;
```

createInitialState can accept two parameters: App props and Document context.

## License

MIT
