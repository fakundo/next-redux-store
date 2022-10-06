import { makeStore, Provider } from 'modules/redux';
import { createUseStore } from 'next-redux-store';
import { AppProps } from 'next/app';

const useStore = createUseStore(makeStore);

export default function _App(appProps: AppProps<any>) {
  const { Component, pageProps } = appProps;
  const store = useStore(appProps);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
