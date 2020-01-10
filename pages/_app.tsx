import { Provider } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
import App from 'next/app';
import React from 'react';
import { initializeStore, IStore } from 'store/store';

import 'normalize.css';
import 'static/css/style.less';

interface IOwnProps {
  initialState: IStore
}

class MyApp extends App<IOwnProps> {
  public static async getInitialProps({ Component, ctx }: any) {
    const store = initializeStore()
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      initialState: getSnapshot(store),
      pageProps,
    }
  }

  private store: IStore

  constructor(props: any) {
    super(props)
    this.store = initializeStore(props.initialState) as IStore
  }

  public render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={this.store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp;
