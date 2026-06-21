import styles from './ModalFooter.module.css'

interface ModalFooterProps {
  onClose: () => void,
  handleSubmit: () => void,
  selectedValue: string | null
}

export function ModalFooter({onClose, handleSubmit, selectedValue}: ModalFooterProps) {
  return (
    <div className={styles.footer}>
      <button
        className={styles.cancel}
        onClick={onClose}
      >
        Отмена
      </button>
      <button
        className={styles.agree}
        onClick={handleSubmit}
        disabled={!selectedValue}
      >
        Выбрать и продолжить
      </button>
    </div>
  )
}
