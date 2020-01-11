import React from 'react';
import $ from 'jquery';
import { inject, observer } from 'mobx-react';

import Header from 'components/layout/header';
import Modal from 'components/modal';
import Title from 'components/pages/title';
import Logo from 'components/pages/logo';
import Tab from 'components/pages/tab';
import List from 'components/pages/list';
import Footer from 'components/pages/footer';
import HourlyWeather from 'components/pages/hourlyWeather';

import { IStore } from 'store/store';

interface IndexPageProps {
  store: IStore
}

@inject('store')
@observer
class IndexPage extends React.Component<IndexPageProps> {
  state = {
    refresh: false
  };

  changeTabMode() {
    const height = $('#title').height()! + $('#logo').height()! + $('.tab').height()!;
    $(window).scroll(() => {
      const windowHeight = $(document).scrollTop();
      if(windowHeight! > height) {
        $('.tab').removeClass('tab').addClass('mini-tab');
        $('#list').css({'margin-top': '290px'});
      } else {
        $('.mini-tab').removeClass('mini-tab').addClass('tab');
        $('#list').css({'margin-top': '-50px'});
      }
    });
  }

  refresh() {
    this.setState({refresh: true});
  }

  componentDidMount() {
    this.changeTabMode();
  }

  render() {
    return (
      <div>
        <Header title='EASYWAY'/>

        <Title isSignin={this.props.store.isSignin}/>
        <Logo/>
        <Tab handler={this.refresh.bind(this)}/>
        <List refresh={this.state.refresh}/>
        <Footer/>

        <Modal>
          <HourlyWeather refresh={this.state.refresh}/>
        </Modal>
      </div>
    );
  }
}

export default IndexPage;
