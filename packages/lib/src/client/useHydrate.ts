import { useCallback } from 'react';

export const HYDRATE = 'NEXT_REDUX_STORE_HYDRATE_ACTION';

export const useHydrate = (store: any) =>
  useCallback(
    (payload: any) => {
      if (payload) {
        store.dispatch({ type: HYDRATE, payload });
      }
    },
    [store],
  );
