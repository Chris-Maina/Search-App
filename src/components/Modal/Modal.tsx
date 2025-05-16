import React from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.css';

interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, title, children }) => (
  // @ts-expect-error popover is a non-standard attribute
  <dialog id={id} popover="auto" className={styles.dialog}>
    <article>
      <header className={styles.header}>
        <h2 className={styles.h2}>{title}</h2>
        <Button
          label="×"
          aria-label="Close modal"
          className={styles.closeBtn}
          popoverTarget={id}
          popoverTargetAction="hide"
          aria-controls='main-modal'
        />
      </header>
      <div>
        {children}
      </div>
    </article>
  </dialog>
);

export default Modal;