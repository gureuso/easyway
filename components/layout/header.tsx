import React from 'react';
import Head from 'next/head';

interface Props {
  title: string
}

class Header extends React.Component<Props> {
  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
      </Head>
    );
  }
}

export default Header;
