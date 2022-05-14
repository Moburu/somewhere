import React from 'react'
import './TodoList.css';
import { Todo } from '../Todo/Todo.js';

export const TodoList = props => {
  return (
    <div className='TodoList'>
          <Todo content='Fake todo'/>
          <Todo content='Another placeholder'/>
          <Todo content='Still no real todos'/>
    </div>
  )
}
