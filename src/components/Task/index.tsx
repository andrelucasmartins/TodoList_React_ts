import { DeleteButton } from '../Button/DeleteButton';
import { Checkbox } from '../Checkbox';

import { useState } from 'react';
import { TasksProps } from '../Tasks';
import styles from './Task.module.css';


interface TrashProps {
  task: TasksProps
  onDelete: (taskId: string) => void
  onCompleted: (taskId: string) => void
}

export function Task({ task, onCompleted, onDelete }: TrashProps) {
  const [isChecked, setIsChecked] = useState(false)

  const { id, text } = task


  function handleDeleteTask() {
    onDelete(id)
  }

  function handleChangeChecked() {
    onCompleted(id)
    setIsChecked(!isChecked)
  }

  const isCheckedText = isChecked ? styles.isCheckedText : ''

  return (
    <div className={styles.task}>
      <Checkbox
        name={text}
        id={`${id}`}
        onChange={handleChangeChecked}
      />
      <p className={isCheckedText}>{text}</p>
      <DeleteButton
        onClick={handleDeleteTask}
      />
    </div>
  )
}