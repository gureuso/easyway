import React from 'react';
import Head from 'next/head';

interface Props {
  title: string
}

class Header extends React.Component<Props> {
  title: string;

  constructor(props: any, title: string) {
    super(props);
    this.title = title;
  }

  render() {
    return (
      <Head>
        <title>{this.title}</title>
      </Head>
    );
  }
}

export default Header;
