import React from 'react'
import './Todo.css';
import { Icon, Segment } from 'semantic-ui-react';

export const Todo = props => {
  return (
    <div className='Todo'>
      <Segment className='todo-segment' raised size='huge' color='purple' vertical><span className='content'>{props.content}</span><span className='delete'><Icon name='trash alternate outline'/></span></Segment>
    </div>
  )
}
