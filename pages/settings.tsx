import React from 'react';
import { inject, observer } from 'mobx-react';

import Header from 'components/layout/header';
import Title from 'components/pages/title';
import Logo from 'components/pages/logo';
import TextOnlyTab from 'components/pages/textOnlyTab';
import BlankList from 'components/pages/blankList';
import Settings from 'components/pages/settings';
import Footer from 'components/pages/footer';
import SNSLogin from 'components/pages/snsLogin';

import { IStore } from 'store/store';


interface SettingPageProps {
  store: IStore
}

@inject('store')
@observer
class SettingsPage extends React.Component<SettingPageProps> {
  render() {
    if(!this.props.store.isSignin) {
      return (<>
        <div>
          <Header title='EASYWAY'/>

          <Title isSignin={this.props.store.isSignin}/>
          <Logo/>
          <TextOnlyTab title='로그인해주세요.'/>
          <BlankList>
            <SNSLogin/>
          </BlankList>
          <Footer/>
        </div>

      </>)
    }

    return (
      <div>
        <Header title='EASYWAY'/>

        <Title isSignin={this.props.store.isSignin}/>
        <Logo/>
        <TextOnlyTab title='설정'/>
        <BlankList>
          <Settings token={this.props.store.token}/>
        </BlankList>

        <Footer/>
      </div>
    );
  }
}

export default SettingsPage;
