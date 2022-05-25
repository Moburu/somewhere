import React from 'react'
import './Todo.css';
import { Button, Icon, Segment } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../features/todosSlice/todosSlice';

export const Todo = props => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(removeTodo(props.content));
  }

  return (
    <div className='Todo'>
      <Segment className='todo-segment' raised size='huge' color='purple' vertical>
        <span className={'content'}>
          {props.content}
        </span>
        <span className='delete'>
          <Button compact circular basic color='purple' onClick={handleClick} size='small' icon='trash alternate outline'/>
        </span>
      </Segment>
    </div>
  )
}
