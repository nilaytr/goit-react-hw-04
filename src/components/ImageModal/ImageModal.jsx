import Modal from 'react-modal';
import { useEffect } from 'react';
import css from './ImageModal.module.css';

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <Modal
      isOpen={Boolean(image)}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button onClick={onClose} className={css.closeButton}>✖</button>
      {image?.urls?.regular && (
        <img src={image.urls.regular} alt={image.description || "Selected Image"} />
      )}
    </Modal>
  );
};

export default ImageModal