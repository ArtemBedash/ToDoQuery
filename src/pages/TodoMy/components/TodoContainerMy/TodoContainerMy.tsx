import {TodoItem} from '~/components/Todo'
import style from '~/pages/TodoMy/todo.module.css'
import ToDoEdit from '~/pages/TodoMy/components/ToDoEdit/ToDoEdit'
import {
    useChangeStatusMutation,
    useDeleteTaskMutation,
    useEditTaskMutation,
    useGetTasksQuery
} from "~/store/api/tasksApi.ts";

const TodoContainerMy = () => {

    const {data: items = [],isLoading} = useGetTasksQuery();
    const [deleteTask] = useDeleteTaskMutation();
    const [changeStatus] = useChangeStatusMutation();
    const [editTask] = useEditTaskMutation();

    if(isLoading){
        return <div>Loading.......</div>;
    }

    const handleDelete = async (id: string) => {
        try {
            await deleteTask(id).unwrap();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }

    const handleComplete = async (id: string) => {
        const task = items.find(item => item.id === id);
        if (task) {
            await changeStatus({task});
        }

    }


    const handleChange = async (id: string) => {
        const task = items.find(item => item.id === id);
        if (task) {
            await editTask({task});
        }
    }

    return (

        <ul className={style.todo__list}>
            {[...items].reverse().map((task) => (

                task.isEdited ? <ToDoEdit
                        key={task.id}
                        //@ts-ignore
                        task={task}/> :

                    <TodoItem
                        key={task.id}
                        //@ts-ignore
                        task={task}
                        handleDelete={handleDelete}
                        handleComplete={handleComplete}
                        handleChange={handleChange}
                    />
            ))}
        </ul>

    )
}

export default TodoContainerMy
