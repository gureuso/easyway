import React from 'react';
import { inject, observer } from 'mobx-react';
import Router from 'next/router';

import { IStore } from 'store/store';

interface SignoutPageProps {
  store: IStore
}

@inject('store')
@observer
class SignoutPage extends React.Component<SignoutPageProps> {
  componentDidMount() {
    setTimeout(() => {
      Router.push('/');
    }, 500);
  }

  componentWillMount() {
    this.props.store.signout();
  }
  
  render() {
    return (
      <div></div>
    );
  }
}

export default SignoutPage;
