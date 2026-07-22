import styles from './TextArea.module.css';
import type {ChangeEvent} from "react";

type TextAreaProps = {
  value: string,
  maxLength: number,
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  isDisable: boolean,
  isValid: boolean,
  isEditing?: boolean
};

export function TextArea({ value, maxLength, handleChange, isDisable, isValid, isEditing = true }: TextAreaProps) {
  return (
    <div className={`${styles.textContainer} ${isValid ? (isEditing ? styles.edit : styles.validOutline) : styles.errorOutline} `}>
      <textarea
        value={value}
        onChange={handleChange}
        disabled={isDisable}
        placeholder={'Компетентный опыт, софт-скиллы, ваш подход к работе...'}
      >
      </textarea>
      <p className={isValid ? styles.valid : styles.error}>
        {value.length} / {maxLength}
      </p>
    </div>
  )
}