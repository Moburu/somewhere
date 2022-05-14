import React from 'react'
import './TodoApp.css';
import { TodoInput } from '../TodoInput/TodoInput.js';
import { TodoList } from '../TodoList/TodoList.js';

const TodoApp = props => {
  return (
    <div className='TodoApp'>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default TodoApp
