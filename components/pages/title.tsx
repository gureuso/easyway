import React from 'react';
import Link from 'next/link';

interface TitleProps {
  isSignin: boolean
}

class Title extends React.Component<TitleProps> {
  renderSignin() {
    if(this.props.isSignin) {
      return (
        <div className="content">
          <ul id="signin">
            <li><Link href='/signout'><a>로그아웃</a></Link></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="content">
          <ul id="signin">
          <li><Link href='/signin'><a>로그인</a></Link></li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderSignin()}
        <div className="content bg-c-gray" id="title">
          <p>걱정없이 집을 나가자!</p>
          <h1><Link href='/'><a>EASYWAY</a></Link></h1>
        </div>
      </div>
    );
  }
}

export default Title;
