import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class CCPage extends React.Component {
  render() {
    return (
      <ul>
        <li><a href="https://www.data.go.kr/dataset/15000314/openapi.do">버스도착정보</a> by 서울특별시, CC BY</li>
        <li><a href="http://data.seoul.go.kr/dataList/datasetView.do?infId=OA-12764&srvType=A&serviceKind=1&currentPageNo=1">지하철도착정보</a> by 서울특별시, CC BY</li>
      </ul>
    );
  }
}

export default CCPage;
