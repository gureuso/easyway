import React from 'react';

import GoogleLoginBtn from 'static/img/sns/google.png';
import KakaoLoginBtn from 'static/img/sns/kakao.png';
import { Random } from 'lib/common';
import config from 'config.json';

class SNSLogin extends React.Component {
  get_redirect_uri(company: string) {
    return `${config.API_HOST}/accounts/callback/${company}`;
  }

  login(company: string) {
    let url = '';
    switch(company) {
      case 'google':
        url = 'https://accounts.google.com/o/oauth2/v2/auth?' +
          'scope=email%20profile&' +
          'response_type=code&' +
          'state=security_token%3D138r5719ru3e1%26url%3Dhttps://oauth2.example.com/token&' +
          'redirect_uri=' + this.get_redirect_uri('google') + '&' +
          'client_id=485933391623-5806uemc2ksqf7q7gjoturtqhl0110k4.apps.googleusercontent.com';
        break;
      case 'facebook':
        url = 'https://www.facebook.com/dialog/oauth?' +
          'client_id=981374768865560&' +
          'redirect_uri=' + this.get_redirect_uri('facebook') + '&' +
          'scope=email';
        break;
      case 'kakao':
        url = 'https://kauth.kakao.com/oauth/authorize?' +
          'client_id=019b2468962364c725978946c23b8953&' +
          'redirect_uri=' + this.get_redirect_uri('kakao') + '&' +
          'response_type=code';
        break;
      case 'naver':
        url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=w8zTKKdu7csfDVKGsMXv&' +
          'state=' + Random.all(10) + '&' +
          'redirect_uri=' + this.get_redirect_uri('naver');
    }
    return url;
  }

  render() {
    return (
      <div className="list">
        <div>
          <div className="sns">
            <a href={this.login('google')}>
              <img src={GoogleLoginBtn} className="sns-btn"/>
            </a>
          </div>
        </div>
        <div>
          <div className="sns">
            <a href={this.login('kakao')}>
              <img src={KakaoLoginBtn} className="sns-btn"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SNSLogin;
