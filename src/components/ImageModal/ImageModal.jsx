import Modal from 'react-modal';
import { useEffect } from 'react';
import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'none',
      border: 'none',
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={css.modalDiv}>
        <img src={imageUrl} alt="Large" className={css.modalImage} />
        <button className={css.closeBtn} onClick={onClose}>Close</button>
      </div>
    </ReactModal>
  );
};

export default ImageModal