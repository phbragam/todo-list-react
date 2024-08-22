import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return <ul className="list">
        {/*
       Shot circuitng: if first statement is true (todos.lenght is 0) , the second statement is evaluated ("No Todos").
       if first statement is false (todos.length is not equal to 0), the second statement dont needs to be evaluated ("No todos").
       In this way, the "No todos" code is only reached if todos.length is 0
       Remember:
       0 && 0 = 0
       0 && 1 = 0
       1 && 0 = 0
       1 && 1 = 1
      */}
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
            return <TodoItem
                {...todo} // spread operator to the same as passing each property of the object
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        })}
    </ul>
}