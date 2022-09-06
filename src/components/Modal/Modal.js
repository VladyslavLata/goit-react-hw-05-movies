import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBox } from './Modal.styled';

const modalEl = document.getElementById('modal');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const onCloseModalPressEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onCloseModalPressEsc);
    return () => window.removeEventListener('keydown', onCloseModalPressEsc);
  }, [onClose]);

  const closeModalClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={closeModalClickBackdrop}>
      <ModalBox>{children}</ModalBox>
    </Backdrop>,
    modalEl
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
