import { ButtonHTMLAttributes } from "react"

import plus from '../../../assets/plus.svg'

import styles from './CreateButton.module.css'

interface CreateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function CreateButton({ text, ...props }: CreateButtonProps) {
  return (
    <button
      {...props}
      className={styles.createButton}
    >
      {text}
      <img src={plus} alt={`icon ${text}`} />
    </button>
  )
}