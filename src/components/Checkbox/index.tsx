import { InputHTMLAttributes } from 'react'

import styles from './Checkbox.module.css'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  id?: string
}

export function Checkbox({ name, id, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      {...props}
      name={name}
      id={id}
      className={styles.checkbox}
    />
  )
}