import styles from './TextField.module.css'
import type { ChangeEvent } from "react";
import clsx from "clsx";

type TextFieldProps = {
  value: string
  subtitle?: string
  placeholder?: string
  maxLength?: number
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  validError?: string | undefined
}

export const TextField = ({value, placeholder, maxLength, onChange, subtitle, validError}: TextFieldProps)=>  {
  return (
    <div className={clsx(styles.textContainer, (validError ? styles.error : ''))}>

      {subtitle && <p className={styles.subtitle}>
        {subtitle}
      </p>}

      <textarea
        name="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      <p className={styles.value}>
        {value.length} / {maxLength}
      </p>

    </div>
  )
}

interface TextFieldFormProps {
  value: string,
  placeholder?: string,
  maxLength?: number
  subtitle?: string
  title?: string
  validError?: string | undefined,
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void,
}

export const TextFieldForm  = ({value, placeholder, maxLength, validError, title, onChange, subtitle} : TextFieldFormProps) => {
  return (
    <div className={styles.body}>
      <h5 className={styles.title}>
        {title || ''}
      </h5>
      <TextField value={value} placeholder={placeholder} maxLength={maxLength} onChange={onChange} subtitle={subtitle} validError={validError}/>
      <p className={styles.error}>
        {validError || ''}
      </p>
    </div>
  )
}
