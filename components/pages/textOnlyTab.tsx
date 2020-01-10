import React from 'react';

import Link from 'next/link';

interface TabProps {
  title: string
}

class TextOnlyTab extends React.Component<TabProps> {
  render() {
    return (
      <div className="content bg-c-yellow text-only-tab">
        <div className="inner-content">
          <div id="tab">
            <ul>
              <li>
                <Link href="/"><a>{this.props.title}</a></Link>
                <div></div>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TextOnlyTab;
