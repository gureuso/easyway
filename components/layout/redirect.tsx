import React from 'react';
import Router from 'next/router';

interface RedirectProps {
  to: string
}

class Redirect extends React.Component<RedirectProps> {
  componentDidMount() {
    Router.push(this.props.to)
  }

  render() {
    return (
      <div>redirect...</div>
    );
  }
}

export default Redirect;
