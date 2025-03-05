import React from 'react'
import { AppButton, SvgIcon } from '../../../../ui'
import { TodoItemProps } from '~/types/interface.ts'
import style from './TodoItem.module.css'

const TodoItem: React.FC<TodoItemProps>  = ({task, handleDelete, handleComplete, handleChange}) => {
  
  return (
    <li className={style.item}>
      <p className={task.completed ? style.completed : ''}>{task.text}</p>
      <AppButton onClick={() => handleComplete(task.id)} icon={<SvgIcon type="edit" />} />
        <AppButton onClick={() => handleChange(task.id)} icon={<SvgIcon type="change" />} />
        <AppButton onClick={() => handleDelete(task.id)} icon={<SvgIcon type="delete" />} />
    </li>
  )
}

export default TodoItem
