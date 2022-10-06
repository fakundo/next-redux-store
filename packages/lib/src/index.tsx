import { AppProps } from 'next/app';
import { Component } from 'react';
import { Provider, ProviderProps } from 'react-redux';
import { GLOBAL_NAME, PROP_NAME } from './constants';

export const HYDRATE = 'NEXT_REDUX_STORE_HYDRATE_ACTION';

export interface StoreProviderProps extends Omit<ProviderProps, 'store'> {
  appProps: AppProps<any>;
  makeStore: (preloadedState: any | undefined) => any;
}

const getPreloadedState = (appProps: AppProps<any>) => {
  return (appProps as any)[PROP_NAME] || (globalThis as any)[GLOBAL_NAME];
};

const getStateFromPage = (appProps: AppProps<any>) => {
  return appProps.pageProps[PROP_NAME];
};

export class StoreProvider extends Component<StoreProviderProps> {
  store: any;

  constructor(props: StoreProviderProps) {
    super(props);
    const { makeStore, appProps } = props;
    const preloadedState = getPreloadedState(appProps);
    const stateFromPage = getStateFromPage(appProps);
    this.store = makeStore(preloadedState);
    this.hydrate(stateFromPage);
  }

  shouldComponentUpdate({ appProps: nextAppProps }: StoreProviderProps) {
    const { appProps } = this.props;
    const stateFromPage = getStateFromPage(appProps);
    const nextStateFromPage = getStateFromPage(nextAppProps);
    if (stateFromPage !== nextStateFromPage) {
      this.hydrate(nextStateFromPage);
    }
    return true;
  }

  hydrate = (payload: any) => {
    if (payload) {
      this.store.dispatch({ type: HYDRATE, payload });
    }
  };

  render() {
    const { makeStore, appProps, ...rest } = this.props;
    return <Provider store={this.store} {...rest} />;
  }
}
