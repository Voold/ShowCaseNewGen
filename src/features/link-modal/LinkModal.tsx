import styles from './LinkModal.module.css'
import {Modal} from "@/shared/ui/modal/Modal.tsx";
import TrashIcon from "@/shared/ui/icons/trash.svg?react"
import {useEffect, useState} from "react";

type LinkModalProps = {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (value: string) => void,
  onDelete: () => void,
  firstValue: string
  typeLink: string
}

export function LinkModal({ isOpen, onClose, onSubmit, onDelete, firstValue, typeLink}: LinkModalProps) {
  const [value, setValue] = useState(firstValue)

  useEffect(() => {
    setValue(firstValue);
  }, [firstValue]);


  const handleSubmit = () => {
    onSubmit(value)
    onClose()
  }

  const handleDelete = () => {
    onDelete()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.SpecialBlock>
        {
          <div className={styles.header}>
            <h3>
              {typeLink}
            </h3>
            <button
              className={styles.deleteButton}
              onClick={handleDelete}
            >
              <TrashIcon/>
              Удалить
            </button>
          </div>
        }
      </Modal.SpecialBlock>

      <Modal.Body>
        {
          <input
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"@id"}
          />
        }
      </Modal.Body>

      <Modal.Footer>
        <div className={styles.buttonContainer}>
          <button onClick={onClose}>
            Отмена
          </button>
          <button className={styles.submitButton} onClick={handleSubmit}>
            Сохранить изменения
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}