import "./styles.css"
import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    // the callback passed as parameter for setTodos returns the value we want the new state to be
    setTodos((currentTodos) => {
      // the spred operator for arrays returns the same array with additional elements 
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // cant do this because of immutability principle
          // todo.completed = completed

          // the spread operator for objects returns the same object with overrided / added properties
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return <>
    <NewTodoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
}