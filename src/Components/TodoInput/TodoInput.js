import React, { useState } from 'react'
import './TodoInput.css';
import { Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todosSlice/todosSlice';
import { store } from '../App/store';

export const TodoInput = props => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { target } = e;
    const { todo } = Object.fromEntries(new FormData(target))
    dispatch(addTodo(todo));
    setInput('');
  }

  const handleChange = (e, { name, value }) => setInput(value);

  return (
    <div className='TodoInput'>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          fluid
          size='huge'
          name='todo'
          placeholder='What needs to get done?'
          onChange={handleChange}
          value={input}
        />
      </Form>
    </div>
  )
}
