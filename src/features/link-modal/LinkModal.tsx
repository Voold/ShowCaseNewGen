import styles from './LinkModal.module.css'
import {Modal} from "@/shared/ui/modal/Modal.tsx";
import TrashIcon from "@/shared/ui/icons/trash.svg?react"
import {useState} from "react";

type LinkModalProps = {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: () => void,
  firstValue: string
  typeLink: string
}

export function LinkModal({ isOpen, onClose, onSubmit, firstValue, typeLink}: LinkModalProps) {
  const [value, setValue] = useState(firstValue)

  const handleSubmit = () => {
    onClose()
    onSubmit()
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
              onClick={handleSubmit}
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
          <button>
            Отмена
          </button>
          <button>
            Сохранить изменения
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}
