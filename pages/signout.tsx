import React from 'react';
import { inject, observer } from 'mobx-react';
import Redirect from 'components/layout/redirect';

import { IStore } from 'store/store';

interface SignoutPageProps {
  store: IStore
}

@inject('store')
@observer
class SignoutPage extends React.Component<SignoutPageProps> {
  componentWillMount() {
    this.props.store.signout();
  }
  
  render() {
    return (
      <Redirect store={this.props.store} to='/'/>
    );
  }
}

export default SignoutPage;
