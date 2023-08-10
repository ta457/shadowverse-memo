/* eslint-disable react/prop-types */
import '../styles/Modal.css';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal };