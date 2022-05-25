import React from 'react'
import './TodoList.css';
import { Todo } from '../Todo/Todo.js';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../features/todosSlice/todosSlice';

export const TodoList = props => {
  const todos = useSelector(selectTodos);

  return (
    <div className='TodoList'>
          {todos.map(
            (todo, index) => <Todo content={todo} key={index} index={index}></Todo>
          )}
    </div>
  )
}
