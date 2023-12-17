import PropTypes from 'prop-types';
import css from './Modal.module.css';
export const Modal = ({ Image, onClick }) => {
  return (
    <>
      <div onClick={onClick} className={css.overlay}>
        <div className={css.modal}>
          <img src={Image} alt="" />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
// import React, { Component } from 'react';

// class Modal extends Component {
//   render() {
//     return <div>Modal</div>;
//   }
// }

// export default Modal;

// import React, { Component } from 'react';
// import { ModalContainer, ModalImage, Overlay } from './Modal.styled';

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return (
//       <Overlay className="Overlay" onClick={this.handleBackdropClick}>
//         <ModalContainer className="Modal">
//           <ModalImage src={this.props.imageURL} alt="Modal" />
//         </ModalContainer>
//       </Overlay>
//     );
//   }
// }

// export default Modal;
