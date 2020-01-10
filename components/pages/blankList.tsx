import React from 'react';

class BlankList extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="inner-content" id="list">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BlankList;
