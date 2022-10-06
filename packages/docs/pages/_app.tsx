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
