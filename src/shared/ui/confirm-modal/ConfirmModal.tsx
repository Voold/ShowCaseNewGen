import { Modal } from '@/shared/ui/modal/Modal.tsx';
import BigQuestionIcon from '@/shared/ui/icons/big-question.svg?react';
import styles from './ConfirmModal.module.css';

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onDecline: () => void;
}

export const ConfirmModal = ({
  isOpen,
  onClose,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onDecline,
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Body>
        <div className={styles.container}>
          <BigQuestionIcon className={styles.questionIcon}/>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>

          
          <div className={styles.actions}>
            <button className={styles.cancelBtn} onClick={onDecline}>
              {cancelText}
            </button>
            <button className={styles.confirmBtn} onClick={onConfirm}>
              {confirmText}
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
