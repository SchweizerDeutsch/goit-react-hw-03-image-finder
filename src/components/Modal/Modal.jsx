import React, { Component } from 'react';
import { ModalContainer, ModalImage, Overlay } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay className="Overlay" onClick={this.handleBackdropClick}>
        <ModalContainer className="Modal">
          <ModalImage src={this.props.imageURL} alt="Modal" />
        </ModalContainer>
      </Overlay>
    );
  }
}

export default Modal;
