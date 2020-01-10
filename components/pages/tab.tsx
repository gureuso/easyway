import React from 'react';
import $ from 'jquery';

import Link from 'next/link';
import moment from 'moment';

import { Interval } from 'lib/common';

interface TabProps {
  handler: Function
}

class Tab extends React.Component<TabProps> {
  runSpin() {
    const target = $('#tab > ul > li:last-child > img');
    target.removeClass('spin');
    setTimeout(() => {
      target.addClass('spin');
    }, 1);
  }

  refresh() {
    Interval.clearAll();
    this.runSpin();
    this.props.handler();
  }

  render() {
    return (
      <div className="content bg-c-yellow tab">
        <div className="inner-content">
          <div id="date">
            <p>{moment().format('YYYY/MM/DD')}</p>
          </div>
          <div id="tab">
            <ul>
              <li>
                <Link href="/"><a>Main</a></Link>
                <div></div>
              </li>
              <li>
                <img src="/static/img/refresh_btn_01.svg" onClick={this.refresh.bind(this)}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab;
