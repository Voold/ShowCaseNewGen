import styles from './ModalFooter.module.css';

interface ModalFooterProps {
  onClose: () => void;
  handleSubmit: () => void;
  selectedValue?: string | null | boolean;
  disabled?: boolean;
  error?: string | null;
}

export function ModalFooter({ onClose, handleSubmit, selectedValue, disabled, error }: ModalFooterProps) {
  const isSubmitDisabled = disabled ?? (selectedValue === null || selectedValue === false);

  return (
    <div className={styles.footer}>
      {error ? (
        <span className={styles.errorText}>{error}</span>
      ) : (
        <div />
      )}
      <div className={styles.actions}>
        <button
          className={styles.cancel}
          onClick={onClose}
          type="button"
        >
          Отмена
        </button>
        <button
          className={styles.agree}
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
          type="button"
        >
          Выбрать и продолжить
        </button>
      </div>
    </div>
  );
}
