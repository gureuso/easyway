import React from 'react';

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
                <a id="tab-title">{this.props.title}</a>
                <div id="tab-title-bar"></div>
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
