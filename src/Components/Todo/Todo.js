import React, { useState, useEffect } from 'react'
import './Todo.css';
import { Button, Input, Segment, Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../../features/todosSlice/todosSlice';
import { Draggable } from 'react-beautiful-dnd';

export const Todo = props => {
  const [editInput, setEditInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setEditInput(props.content);
  }, []);

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
    dispatch(editTodo([props.index, editInput]))
    setIsEditing(false);
  }

  const handleCancel = e => {
    e.preventDefault();
    setIsEditing(false);
    setEditInput(props.content);
  }

  return (
	<Draggable draggableId={props.id} index={props.index}>
    {(provided) => (
      <div
        className='Todo'
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <Segment
          className='todo-segment'
          raised
          size='huge'
          color='purple'
          vertical
        >
          <span className={'content'}>
            { isEditing ?
              <span className="edit-span">
                <Form className='edit-form' onSubmit={handleSubmit}>
                  <Input placeholder='New todo' transparent className='edit-input' autoFocus value={editInput} onChange={handleChange}/>
                </Form>
              </span> :
              <span className="wrapper">{props.content}</span>
            }
          </span>
          <span className='buttons'>
            { isEditing ?
            <span>
              <Button compact circular basic color='purple' onClick={handleCancel} size='small' icon='cancel' />
              <Button compact circular basic color='purple' onClick={handleSubmit} size='small' icon='checkmark' />
            </span>
            :
            <span>
              <Button compact circular basic color='purple' onClick={handleEdit} size='small' icon='pencil'/>
              <Button compact circular basic color='purple' onClick={handleDelete} size='small' icon='trash alternate'/>
            </span>
            }
          </span>
        </Segment>
      </div>
    )}
  </Draggable>
  )
}
