import { PROP_NAME } from '../constants';

export const serverSideState = (initialState: any) => {
  return { [PROP_NAME]: initialState };
};
