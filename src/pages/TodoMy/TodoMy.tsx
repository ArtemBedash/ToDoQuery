import TodoContainerMy from './components/TodoContainerMy/TodoContainerMy'
import TodoForm from './components/TodoFormMy/TodoForm'
import style from './todo.module.css'



const TodoMy = () => {

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
