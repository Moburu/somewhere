import React from 'react'
import './TodoInput.css';
import { Input } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todosSlice/todosSlice';

export const TodoInput = props => {
  const dispatch = useDispatch;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(e.target.value));
  }

  return (
    <div className='TodoInput'>
      <Input
        fluid
        icon='delete'
        size='huge'
        placeholder='What needs to get done?'
        onSubmit={handleSubmit}
      />
    </div>
  )
}
