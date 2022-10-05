import { useMemo } from 'react';
import { GLOBAL_NAME, PROP_NAME } from './constants';

type MakeStore = (preloadedState?: any | undefined) => any;

export const createUseStore = (makeStore: MakeStore) => (appProps: any) =>
  useMemo(() => {
    const preloadedState = appProps[PROP_NAME] || (globalThis as any)[GLOBAL_NAME];
    return makeStore(preloadedState);
  }, []);
