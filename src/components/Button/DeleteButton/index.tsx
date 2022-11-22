import { ButtonHTMLAttributes } from 'react';
import { IconTrash } from '../../Icons/IconTrash';


import styles from './DeleteButton.module.css';

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

export function DeleteButton({ text, ...props }: DeleteButtonProps) {
  return (
    <button
      {...props}
      className={styles.deleteButton}
    >
      {text}
      <IconTrash />
    </button>
  )
}