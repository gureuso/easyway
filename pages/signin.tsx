import React from 'react';
import { inject, observer } from 'mobx-react';

import Header from 'components/layout/header';
import Title from 'components/pages/title';
import Logo from 'components/pages/logo';
import TextOnlyTab from 'components/pages/textOnlyTab';
import BlankList from 'components/pages/blankList';
import SNSLogin from 'components/pages/snsLogin';
import Footer from 'components/pages/footer';
import Redirect from 'components/layout/redirect';

import { IStore } from 'store/store';

interface SigninPageProps {
  store: IStore
}

@inject('store')
@observer
class SigninPage extends React.Component<SigninPageProps> {
  render() {
    if(this.props.store.isSignin) {
      return <Redirect to='/'/>
    }

    return (
      <div>
        <Header title='EASYWAY'/>

        <Title isSignin={this.props.store.isSignin}/>
        <Logo/>
        <TextOnlyTab title='회원가입'/>
        <BlankList>
          <SNSLogin/>
        </BlankList>

        <Footer/>
      </div>
    );
  }
}

export default SigninPage;
