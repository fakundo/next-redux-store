import { AppProps } from 'next/app';
import { Component } from 'react';
import { Provider, ProviderProps } from 'react-redux';
import { GLOBAL_NAME, PROP_NAME } from './constants';

export const HYDRATE = 'NEXT_REDUX_STORE_HYDRATE_ACTION';

export interface StoreProviderProps extends Omit<ProviderProps, 'store'> {
  appProps: AppProps<any>;
  makeStore: (preloadedState: any | undefined) => any;
}

const getPreloadedState = (props: StoreProviderProps) => {
  const { appProps } = props;
  return (appProps as any)[PROP_NAME] || (globalThis as any)[GLOBAL_NAME];
};

const getStateFromPage = (props: StoreProviderProps) => {
  const { appProps } = props;
  return appProps.pageProps[PROP_NAME];
};

export class StoreProvider extends Component<StoreProviderProps> {
  store: any;

  lastStateFromPage: any;

  constructor(props: StoreProviderProps) {
    super(props);
    const { makeStore } = props;
    const preloadedState = getPreloadedState(props);
    const stateFromPage = getStateFromPage(props);
    this.store = makeStore(preloadedState);
    this.hydrate(stateFromPage);
  }

  shouldComponentUpdate = (nextProps: StoreProviderProps) => {
    const nextStateFromPage = getStateFromPage(nextProps);
    this.hydrate(nextStateFromPage);
    return true;
  };

  hydrate = (payload: any) => {
    if (payload !== this.lastStateFromPage) {
      this.lastStateFromPage = payload;
      if (payload) {
        this.store.dispatch({ type: HYDRATE, payload });
      }
    }
  };

  render() {
    const { makeStore, appProps, ...rest } = this.props;
    return <Provider store={this.store} {...rest} />;
  }
}
