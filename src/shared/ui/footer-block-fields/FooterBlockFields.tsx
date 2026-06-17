import styles from './FooterBlockFields.module.css'

type FooterBlockFieldsProps = {
  MIN_LENGTH?: number,

  isValid: boolean,
  isDisable: boolean,

  disabled: boolean

  handleCancel: () => void,
  handleSubmit: () => void

};

export const FooterBlockFields = ({
  MIN_LENGTH,
    isValid,
    isDisable,
    disabled,
    handleCancel,
    handleSubmit
}: FooterBlockFieldsProps) => {
  return (
      <div className={styles.footer}>
        {MIN_LENGTH && (
          <p className={`${styles.footerLabel} ${!isValid ? styles.error : ''}`}>
            {`Мин: ${MIN_LENGTH} символов`}
          </p>
        )}

        {!isDisable && (
            <div className={styles.buttonContainer}>
              <button className={styles.cancelButton} onClick={handleCancel}>
                Отмена
              </button>
              <button
                  className={`${styles.saveButton} ${disabled ? styles.disable : ''}`}
                  onClick={handleSubmit}
                  disabled={disabled}
              >
                Сохранить изменения
              </button>
            </div>
        )}
      </div>
  );
};
