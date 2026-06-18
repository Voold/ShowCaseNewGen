import styles from './AboutMe.module.css';
import Pencil from '@/shared/ui/icons/pencil.svg?react'
import {type ChangeEvent, useState} from "react";
import {FooterBlockFields, TextArea} from "@/shared";

type AboutMeProps = {
  bio: string,
  className: string
};

export function AboutMe({ bio, className }: AboutMeProps) {
  const MAX_LENGTH = 500
  const MIN_LENGTH = 100
  // Вроде не приходит с сервера, поэтому так
  const [value, setValue] = useState<string>(bio || '')
  const [prevValue, setPrevValue] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(true)


  // Валидация для количества символов
  const isValidSymbol = value.length >= MIN_LENGTH && value.length <= MAX_LENGTH
  const isValidAnother = true
  const isValid = isValidSymbol && isValidAnother

  const hasUpdate = value.trim() !== bio.trim()

  const disabled = !hasUpdate || !isValid

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>)=> {
    const text = e.target.value
    setValue(text)
  }

  const handleCancel = () => {
    setIsEditing(!isEditing)
    setValue(prevValue)
  }

  const handleSubmit = () => {
    setIsEditing(!isEditing)
    // TODO
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
            onClick={() => {
              setIsEditing(!isEditing)
              setPrevValue(value)
            }
          }
          >
            <Pencil />
            Редактировать
          </button>
        </div>
        <TextArea
          value={value}
          maxLength={MAX_LENGTH}
          handleChange={handleChange}
          isDisable={isEditing}
          isValid={isValidSymbol}
          isEditing={isEditing}
        />
        {
          !isEditing && (
            <FooterBlockFields
              MIN_LENGTH={MIN_LENGTH}
              valueLength={value.length}
              isValidSymbol={isValidSymbol}
              isValidAnother={isValidAnother}
              isValid={isValid}
              disabled={disabled}
              handleCancel={handleCancel}
              handleSubmit={handleSubmit}
            />
          )
        }
      </div>
    </section>
  );
}