import React from 'react'
import './TodoList.css';
import { Todo } from '../Todo/Todo.js';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../features/todosSlice/todosSlice';
import { Transition, List } from 'semantic-ui-react';

export const TodoList = props => {
  const todos = useSelector(selectTodos);

  return (
    <div className='TodoList'>
      <Transition.Group
        as={List}
        animation='fade left'
        duration={200}
        size='huge'
        verticalAlign='middle'
      >
        {todos.map(
          (todo, index) => (
            <List.Item key={index}>
              <Todo content={todo} index={index}></Todo>
            </List.Item>
          )
        )}
      </Transition.Group>
    </div>
  )
}
