import { ChangeEvent, FormEvent, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { Header } from '../Header'

import { CreateButton } from '../Button/CreateButton'
import { Input } from '../Input'
import { Task } from '../Task'

import styles from './Tasks.module.css'

import Clipboard from '../../assets/Clipboard.png'

export interface TasksProps {
  id: string
  isCompleted?: boolean
  text?: string
}

export function Tasks() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [content, isContent] = useState('')


  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()

    setTasks([...tasks, { id: uuidv4(), isCompleted: false, text: content }])
    isContent('')
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity('')
    isContent(e.target.value)
  }

  function handleDeleteTask(taskToDelete: string) {
    const taskWithoutDeletedSingle = tasks.filter(task => {
      return task.id !== taskToDelete
    })

    setTasks(taskWithoutDeletedSingle)
  }

  function handleToggleCompletedById(taskId: string) {
    const taskChangeIsCompletedCheck = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task
    })

    setTasks(taskChangeIsCompletedCheck)
  }

  const isNewTask = tasks.length > 0;

  const counterTask = tasks.length
  const counterCompletedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <div className={styles.task}>
      <Header />
      <div className='container'>
        <form
          onSubmit={handleCreateNewTask}
          className={styles.form}
        >
          <Input
            name="task"
            id="task"
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTaskChange}
            value={content}
          />
          <CreateButton
            type="submit"
            text="Criar"
          />

        </form>
        <div>
          <div className={styles.counters}>
            <div className={styles.labels}>
              <p className={styles.createdTaskLabel}>Tarefas criadas</p>
              <span>{counterTask}</span>
            </div>
            <div className={styles.labels}>
              <p className={styles.concludedTaskLabel}>Concluídas</p>
              <span>
                {counterCompletedTasks} de {counterTask}
              </span>
            </div>
          </div>
          {
            isNewTask ?
              tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onCompleted={handleToggleCompletedById}
                    onDelete={handleDeleteTask}
                  />
                )
              }) : (
                <div className={styles.withoutTask}>
                  <img src={Clipboard} />
                  <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </div>
  )
}