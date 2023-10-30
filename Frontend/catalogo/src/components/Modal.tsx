import { ReactNode } from 'react';
import './Modal.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='modal-bg' onClick={onClose}></div>
      <div className='modal-content'>
        <div className='modal-title'>
          <div className='modal-box'>
            <h2>Título</h2>
            <h4>Subtítulo</h4></div>
        </div>

        <button
          type='button'
          className='btn-modal'
          onClick={onClose}
        >X</button>
        <div className=''>{children}</div>
      </div>
    </div>
  );
}




