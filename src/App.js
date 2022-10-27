import './App.css';
import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos);
  }, [])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

   function handleAddTodo(e) {
      const name = todoNameRef.current.value
      if (name === '') return
      setTodos(prevTodos =>{
        return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
      })
      todoNameRef.current.value = null
   }

   function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
   }
  return (
    <>
    <div className="list">
      <div className='line'></div>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <div className='panel'>
    <input ref={todoNameRef} type="text" placeholder='Enter your Task Here'/>
    <button onClick={handleAddTodo}><svg xmlns="http://www.w3.org/2000/svg" width={'20px'} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Add Todo</button>
    <button onClick={handleClearTodos}><svg xmlns="http://www.w3.org/2000/svg" width={'20px'} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm6.414 8l1.768-1.768-1.414-1.414L12 12.586l-1.768-1.768-1.414 1.414L10.586 14l-1.768 1.768 1.414 1.414L12 15.414l1.768 1.768 1.414-1.414L13.414 14zM9 4v2h6V4H9z"></path></svg> Clear Complete</button>
    <div className='lefttodo'>{todos.filter(todo => !todo.complete).length} left todo</div>
    </div>
    </div>
    </>
  )
}

export default App;
