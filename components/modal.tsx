import React from 'react';
import $ from 'jquery';

class Modal extends React.Component {
  static active() {
    $('.modal, .modal-dialog').show();
  }

  static deactive() {
    $('.modal, .modal-dialog').hide();
  }

  componentDidMount() {
    $('.modal-close').click((event) => {
      {Modal.deactive()};
    });
    $('.modal').click((event) => {
      if(event.target.className == 'modal') {
        {Modal.deactive()};
      }
    });
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-dialog">
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
