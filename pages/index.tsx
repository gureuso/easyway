import React from 'react';
import $ from 'jquery';

import Header from 'components/layout/header';
import Modal from 'components/modal';
import Title from 'components/pages/index/title';
import Logo from 'components/pages/index/logo';
import Tab from 'components/pages/index/tab';
import List from 'components/pages/index/list';
import Footer from 'components/pages/index/footer';
import HourlyWeather from 'components/pages/index/hourlyWeather';

class IndexPage extends React.Component {
  state = {
    refresh: false
  };

  changeTabMode() {
    const height = $('#title').height()! + $('#logo').height()! + $('.tab').height()!;
    $(window).scroll(() => {
      const windowHeight = $(document).scrollTop();
      if(windowHeight! > height) {
        $('.tab').removeClass('tab').addClass('mini-tab');
        $('#list').css({'margin-top': '325px'});
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
        <Header title="EASYWAY"/>

        <Title/>
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
