import { AppProps } from 'next/app';
import { useMemo } from 'react';
import { GLOBAL_NAME, PROP_NAME } from '../constants';
import { useHydrate } from './useHydrate';

type MakeStore = (preloadedState: any | undefined) => any;

export const createUseStore = (makeStore: MakeStore) => (appProps: AppProps<any>) => {
  const store = useMemo(() => {
    const preloadedState = (appProps as any)[PROP_NAME] || (globalThis as any)[GLOBAL_NAME];
    return makeStore(preloadedState);
  }, []);

  const stateFromPage = appProps.pageProps[PROP_NAME];
  const hydrate = useHydrate(store);

  useMemo(() => {
    hydrate(stateFromPage);
  }, [hydrate, stateFromPage]);

  return store;
};
