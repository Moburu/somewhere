import React, { useState, useEffect } from 'react'
import './Todo.css';
import { Button, Input, Segment, Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../../features/todosSlice/todosSlice';

export const Todo = props => {
  const [editInput, setEditInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setEditInput(props.content);
  // }, []);

  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(true);
  }

  const handleDelete = e => {
    e.preventDefault();
    dispatch(removeTodo(props.content));
  }

  const handleChange = (e, { name, value }) => setEditInput(value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTodo([props.content, editInput]))
    setIsEditing(false);
  }

  return (
	<div className='Todo'>
	  <Segment className='todo-segment' raised size='huge' color='purple' vertical>
      <span className={'content'}>
        { isEditing ?
          <span className="edit-span">
            <Form className='edit-form' onSubmit={handleSubmit}>
              <Input placeholder='New todo' transparent className='edit-input' autoFocus value={editInput} onChange={handleChange}/>
            </Form>
          </span> :
          props.content
        }
      </span>
      { isEditing ?
        <span className='buttons'>
          <Button compact circular basic color='purple' onClick={handleSubmit} size='small' icon='checkmark' />
        </span>
        :
        <span className='buttons'>
          <Button compact circular basic color='purple' onClick={handleEdit} size='small' icon='pencil'/>
          <Button compact circular basic color='purple' onClick={handleDelete} size='small' icon='trash alternate'/>
        </span>
      }
	  </Segment>
	</div>
  )
}
