"use client"
import React from 'react';

type ModalProps = {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Modal Title</h2>
        <p>This is a modal content</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
