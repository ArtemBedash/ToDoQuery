import TodoContainerMy from './components/TodoContainerMy/TodoContainerMy'
import TodoForm from './components/TodoFormMy/TodoForm'
import style from './todo.module.css'
import {useEffect} from "react";
import {storage} from "~/helpers/storage.ts";
import{useAppSelector} from "~/store/store.ts";
import {getTodos} from "~/store/slices/todos/selectors.ts";


const TodoMy = () => {
  const todos = useAppSelector(getTodos)
  console.log(todos)

  useEffect(() => {
    storage.set('todos', todos)
    console.log(todos)
  }, [todos]);





  return (
      <section className={style.todo}>
        <div className={style.todo__wrapper}>
          <div className={style.todo__header}>
            <h2>Todo List!</h2>
            <p>A simple react todo list app</p>

          </div>
          <TodoContainerMy/>
          <TodoForm/>
        </div>

      </section>
  )
}

export default TodoMy