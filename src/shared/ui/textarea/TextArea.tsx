import styles from './TextArea.module.css';
import type {ChangeEvent} from "react";

type TextAreaProps = {
  value: string,
  maxLength: number,
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  isDisable: boolean,
};

export function TextArea({ value, maxLength, handleChange, isDisable }: TextAreaProps) {
  return (
    <div className={styles.textContainer}>
      <textarea
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        disabled={isDisable}
      >
      </textarea>
      <p>
        {value.length} / {maxLength} символов
      </p>
    </div>
  )
}