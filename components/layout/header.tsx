import React from 'react';
import Head from 'next/head';

interface Props {
  title: string
}

class Header extends React.Component<Props> {
  render() {
    const title = this.props.title;
    return (
      <Head>
        <title>{title}</title>
      </Head>
    );
  }
}

export default Header;
