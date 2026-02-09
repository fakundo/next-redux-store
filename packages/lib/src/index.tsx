import { AppProps } from 'next/app';
import { Component } from 'react';
import { Provider, ProviderProps, useStore } from 'react-redux';
import { SCRIPT_ID, PROP_NAME, HYDRATE } from './constants';

export { HYDRATE };

export interface StoreProviderProps extends Omit<ProviderProps, 'store'> {
  appProps: AppProps<any>;
  store: ReturnType<typeof useStore<any>>;
}

let STATE_FROM_SCRIPT: any;

try {
  STATE_FROM_SCRIPT = JSON.parse(document.getElementById(SCRIPT_ID)!.textContent!);
} catch {}

const getStateFromDoc = (props: StoreProviderProps) => {
  const { appProps } = props;
  return (appProps as any)[PROP_NAME] || STATE_FROM_SCRIPT;
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
    const { store } = props;
    this.store = store;
    const stateFromDoc = getStateFromDoc(props);
    const stateFromPage = getStateFromPage(props);
    this.hydrate(stateFromDoc);
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
    const { store, appProps, ...rest } = this.props;
    return <Provider store={this.store} {...rest} />;
  }
}
