# next-redux-store

[![npm](https://img.shields.io/npm/v/next-redux-store.svg)](https://www.npmjs.com/package/next-redux-store)

Next integration with Redux.

Features:
- state data is passed to the client once when rendering the first page
- does not load state between page transitions
- does not use the HYDRATE action, instead uses preloadedState to configure store on the client once
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

1. Configure your App to use Redux store 

```js
import { makeStore, Provider } from 'modules/redux';
import { createUseStore } from 'next-redux-store';
import { AppProps } from 'next/app';

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

2. Configure your Document to provide initial state for the App

```js
import { makeStore } from 'modules/redux';
import { createGetInitialProps } from 'next-redux-store/createGetInitialProps';

const getInitialState = async (appProps, ctx) => {
  if (!appProps) {
    return undefined;
  }
  const store = makeStore();
  // fill the store considering the App props and Document context
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

```ts
type CreateInitialState = (appProps?: AppProps<any> | undefined, ctx?: DocumentContext) => any;
const createGetInitialProps: (createInitialState: CreateInitialState) => (ctx: DocumentContext) => DocumentInitialProps;
```

createInitialState can accept two parameters: App props and Document context.

## License

MIT
