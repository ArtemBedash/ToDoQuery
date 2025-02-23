import React, {useState} from 'react'
import {AppButton, UIInput} from '~/ui'
import style from './TodoForm.module.css'
import {useAddTaskMutation} from "~/store/api/tasksApi.ts";

const TodoForm: React.FC = () => {
    const [value, setValue] = useState<string>('')

    const [addTask] = useAddTaskMutation();


    const handleSubmit = async () => {
        if (value) {
            await addTask({
                id: Date.now().toString(),
                text: value,
                completed: false,
                isEdited: false
            })
        }


        setValue('')
    }

    return (
        <div className={style.form}>
            <UIInput value={value} onChange={(e) => setValue(e.target.value)}/>
            <AppButton onClick={handleSubmit}>ADD TODO</AppButton>
        </div>
    )
}

export default TodoForm
