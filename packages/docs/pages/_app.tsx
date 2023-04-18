import { AppProps } from 'next/app';
import { StoreProvider } from 'next-redux-store';
import { makeStore } from 'modules/makeStore';

const store = makeStore();

export default function _App(appProps: AppProps<any>) {
  const { Component, pageProps } = appProps;
  return (
    <StoreProvider {...{ store, appProps }}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
