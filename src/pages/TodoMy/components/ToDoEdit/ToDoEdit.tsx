import React, {useState} from 'react';
import style from './ToDoEdit.module.css';
import {AppButton, UIInput} from "~/ui";
import {Task} from "~/types/interface.ts";
import {useUpdateTaskMutation} from "~/store/api/tasksApi.ts";


interface TodoEditProps {
    task: Task
}

const ToDoEdit:React.FC<TodoEditProps> = ({task}) => {
    const [value, setValue] = useState<string>('')
    const[updateTask] = useUpdateTaskMutation();


    const handleSubmit = async (task: Task) => {
        if(value){
            task = {...task,text:value}
            await updateTask({task})
        }

        setValue('')



    }


    return (
        <div className={style.form}>
            <UIInput value={value} onChange={(e) => setValue(e.target.value)}/>
            <AppButton onClick={() => handleSubmit(task)}>Update Task</AppButton>
        </div>
    );
};

export default ToDoEdit