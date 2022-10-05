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
