import React, {useState} from 'react'
import { UIInput, AppButton } from '~/ui'
import style from './TodoForm.module.css'
import { useAppSelector, useAppDispatch } from '~/store/store'
import { getTodos } from '~/store/slices/todos/selectors'
import { addItem } from '~/store/slices/todos/todosSlice'

const TodoForm: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const items = useAppSelector(getTodos)
    //const items1 = useAppSelector((state) => state.todosSlice.todos);
    const dispatch = useAppDispatch()


    const handleSubmit = () => {
        dispatch(addItem(
            [...items, {
                id: Date.now(),
                text: value,
                completed: false,
                isEdited: false

            }]
        ))

        setValue('')
    }

    return (
        <div className={style.form} >
            <UIInput value={value} onChange={(e) => setValue(e.target.value)} />
            <AppButton onClick = {handleSubmit} >ADD TODO</AppButton>
        </div>
    )
}

export default TodoForm