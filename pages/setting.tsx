import React from 'react';
import { inject, observer } from 'mobx-react';

import Header from 'components/layout/header';
import Title from 'components/pages/title';
import Logo from 'components/pages/logo';
import TextOnlyTab from 'components/pages/textOnlyTab';
import BlankList from 'components/pages/blankList';
import Footer from 'components/pages/footer';
import Redirect from 'components/layout/redirect';

import { IStore } from 'store/store';

interface SettingPageProps {
  store: IStore
}

@inject('store')
@observer
class SettingPage extends React.Component<SettingPageProps> {
  render() {
    if(!this.props.store.isSignin) {
      return <Redirect to='/'/>
    }

    return (
      <div>
        <Header title='EASYWAY'/>

        <Title isSignin={this.props.store.isSignin}/>
        <Logo/>
        <TextOnlyTab title='설정'/>
        <BlankList>
        </BlankList>

        <Footer/>
      </div>
    );
  }
}

export default SettingPage;
