import { useMemo } from 'react';
import { PreloadedState, EnhancedStore } from '@reduxjs/toolkit';
import { GLOBAL_NAME, PROP_NAME } from './constants';

type MakeStore = (preloadedState?: PreloadedState<any>) => EnhancedStore;

export const createUseStore = (makeStore: MakeStore) => (appProps: any) =>
  useMemo(() => {
    const preloadedState = appProps[PROP_NAME] || (globalThis as any)[GLOBAL_NAME];
    return makeStore(preloadedState);
  }, []);
