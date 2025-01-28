import React from "react";
import "./Modal.css"; // Import CSS file

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        {/* Modal Title */}
        <h2 className="modal-title">{title}</h2>

        {/* Modal Content */}
        <div className="modal-body">{children}</div>

        {/* Footer Buttons */}
        <div className="modal-footer">
          <button className="modal-button cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-button confirm" onClick={onClose}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
