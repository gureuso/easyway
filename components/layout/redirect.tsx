import React from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import Header from 'components/layout/header';
import Title from 'components/pages/title';
import Logo from 'components/pages/logo';
import TextOnlyTab from 'components/pages/textOnlyTab';
import BlankList from 'components/pages/blankList';
import Footer from 'components/pages/footer';

import { IStore } from 'store/store';

interface RedirectProps {
  to: string,
  store: IStore
}

@inject('store')
@observer
class Redirect extends React.Component<RedirectProps> {
  redirect() {
    setTimeout(() => {
      Router.push(this.props.to);
    }, 500);
  }

  componentDidMount() {
    this.redirect();
  }

  render() {
    return (
      <div>
        <Header title='EASYWAY'/>

        <Title isSignin={this.props.store.isSignin}/>
        <Logo/>
        <TextOnlyTab title='Redirect'/>
        <BlankList>
          <div className="list">
            <div></div>
            <div></div>
          </div>
        </BlankList>

        <Footer/>
      </div>
    );
  }
}

export default Redirect;
