import React from 'react';
import $ from 'jquery';

class Modal extends React.Component {
  static active() {
    $('.modal-bg, .modal').show();
  }

  static deactive() {
    $('.modal-bg, .modal').hide();
  }

  componentDidMount() {
    $('.modal-bg, .modal-close').click(() => {
      {Modal.deactive()};
    });
  }

  render() {
    return (
      <div>
        <div className="modal-bg"></div>
        <div className="modal">
          <div className="modal-header">
            <div className="modal-close">
              <img src="/static/img/close_btn_01.svg"/>
            </div>
          </div>
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
