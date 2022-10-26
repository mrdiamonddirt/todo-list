import React from 'react'

export default function Todo( {todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
  return (
    <div className='todoitem'>
        <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
        {todo.name}
        {/* <img src='' alt-text='edit'></img> */}
        </label>
        <svg xmlns="http://www.w3.org/2000/svg" width={'20px'} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"></path></svg>
    </div>
  )
}
