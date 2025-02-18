import React, {useState} from 'react';
import style from './ToDoEdit.module.css';
import {AppButton, UIInput} from "~/ui";
import {useAppDispatch} from "~/store/store.ts";
import {updateItem} from "~/store/slices/todos/todosSlice.ts";
import {Task} from "~/types/interface.ts";

interface TodoEditProps {
    task: Task
}

const ToDoEdit:React.FC<TodoEditProps> = ({task}) => {
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleSubmit = (id:number) => {
        console.log(id)
        dispatch(updateItem({
            id,
            text:value
        }))
        setValue('')

    }


    return (
        <div className={style.form}>
            <UIInput value={value} onChange={(e) => setValue(e.target.value)}/>
            <AppButton onClick={() => handleSubmit(task.id)}>Update Task</AppButton>
        </div>
    );
};

export default ToDoEdit