import styles from './LinkModal.module.css'
import { Modal } from "@/shared/ui/modal/Modal.tsx";
import TrashIcon from "@/shared/ui/icons/trash.svg?react"
import { useEffect, useState } from "react";
import clsx from "clsx";

type LinkModalProps = {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (value: string) => void,
  onDelete: () => void,
  firstValue?: string
  typeLink: string
}

const formatSocialLink = (input: string): string => {
  if (!input) return '';
  if (input === '@') return '@';

  const cleaned = input.replace(/^@+/, '');
  if (!cleaned) return '';

  return `@${cleaned}`;
};

export function LinkModal({ isOpen, onClose, onSubmit, onDelete, firstValue = '', typeLink }: LinkModalProps) {
  const [value, setValue] = useState(() => formatSocialLink(firstValue))

  useEffect(() => {
    setValue(formatSocialLink(firstValue || ''));
  }, [firstValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatSocialLink(rawValue);
    setValue(formatted);
  };

  const handleFocus = () => {
    if (!value) {
      setValue('@');
    }
  };

  const handleBlur = () => {
    if (value === '@') {
      setValue('');
    }
  };

  const handleSubmit = () => {
    const finalValue = value === '@' ? '' : value;
    onSubmit(finalValue)
    onClose()
  }

  const handleDelete = () => {
    onDelete()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.SpecialBlock>
        <div className={styles.header}>
          <h3>
            {typeLink}
          </h3>
          <button
            className={styles.deleteButton}
            onClick={handleDelete}
          >
            <TrashIcon />
            Удалить
          </button>
        </div>
      </Modal.SpecialBlock>

      <Modal.Body>
        <input
          className={styles.input}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={"@id"}
        />
      </Modal.Body>

      <Modal.Footer>
        <div className={styles.buttonContainer}>
          <button onClick={onClose}>
            Отмена
          </button>
          <button className={clsx(styles.submitButton, firstValue === value ? styles.disable : '')} onClick={handleSubmit}>
            Сохранить изменения
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}