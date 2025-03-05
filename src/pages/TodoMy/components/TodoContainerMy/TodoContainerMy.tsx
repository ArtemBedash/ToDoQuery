import {TodoItem} from '~/components/Todo'
import {getTodos} from '~/store/slices/todos/selectors'
import style from '../../todo.module.css'
import {useAppDispatch, useAppSelector} from '~/store/store'
import {changeItem, changeItemStatus, deleteItem} from "~/store/slices/todos/todosSlice.ts";
import ToDoEdit from '~/pages/TodoMy/components/ToDoEdit/ToDoEdit'


const TodoContainerMy = () => {
    const items = useAppSelector(getTodos)
    const dispatch = useAppDispatch()
    console.log('items:', items);


    const handleDelete = (id: number|string) => {

        dispatch(deleteItem(id))

    }

    const handleComplete = (id: number|string) => {
        dispatch(changeItemStatus(id))
    }

    const handleChange = (id: number|string) => {

        dispatch(changeItem(id))
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