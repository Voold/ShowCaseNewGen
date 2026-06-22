import styles from './Radio.module.css'
import clsx from "clsx";
import type {InputHTMLAttributes} from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | undefined
}

export function Radio({ label, className, checked, ...props }: RadioProps) {
  return (
    <label className={clsx(styles.wrapper, { [styles.active]: checked }, className)}>
      <input
        type='radio'
        className={styles.visuallyHidden}
        checked={checked}
        {...props}
      />
      <span className={styles.customRadio} />
      <span className={styles.label}>{label}</span>
    </label>
  )
}
