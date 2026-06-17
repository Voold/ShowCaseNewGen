import styles from './AboutMe.module.css';
import Pencil from '@/shared/ui/icons/pencil.svg?react'
import {type ChangeEvent, useState} from "react";
import {TextArea} from "@/shared";

type AboutMeProps = {
  bio: string,
  className: string
};

export function AboutMe({ bio, className }: AboutMeProps) {
  const MAX_LENGTH = 500
  const MIN_LENGTH = 100
  // Вроде не приходит с сервера, поэтому так
  const [value, setValue] = useState<string>(bio || '')
  const [isDisable, setIsDisable] = useState<boolean>(true)

  // Вычисляем валидность на лету
  const isValid = value.length >= MIN_LENGTH && value.length <= MAX_LENGTH
  const hasUpdate = value.trim() !== bio.trim()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
    const text = e.target.value
    setValue(text)
  }

  const handleSubmit = () => {
    setIsDisable(!isDisable)
    // TODO
  }

  const label = () => {

  }

  return (
    <section className={`${styles.body} ${className}`}>
      <div className={styles.mainContainer}>
        <div className={styles.bioContainer}>
          <h3>
            Обо мне
          </h3>
          <button
            className={styles.editButton}
            onClick={() => setIsDisable(!isDisable)}
          >
            <Pencil />
            Редактировать
          </button>
        </div>
        <TextArea
          value={value}
          maxLength={MAX_LENGTH}
          handleChange={handleChange}
          isDisable={isDisable}
        />
        <div className={styles.footer}>
          <p className={`${styles.footerLabel} ${!isValid ? styles.error : ''}`}>
            {
              `Мин: ${MIN_LENGTH} символов`
            }
          </p>
          {!isDisable && (
            <div className={styles.buttonContainer}>
              <button className={styles.cancelButton} onClick={() => setIsDisable(!isDisable)}>
                Отмена
              </button>
              <button
                className={`${styles.saveButton} ${(!hasUpdate || !isValid) ? styles.disable : ''}`}
                onClick={handleSubmit}
                disabled={!hasUpdate || !isValid}
              >
                Сохранить изменения
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};