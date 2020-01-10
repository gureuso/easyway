import React from 'react';
import Link from 'next/link';

class Footer extends React.Component {
  render() {
    return (
      <div className="content bg-c-yellow" id="footer">
        <p><Link href="/cc"><a>CC</a></Link></p>
      </div>
    );
  }
}

export default Footer;
