/* eslint-disable no-lone-blocks */
import React from 'react'
import './TodoList.css';
import { Todo } from '../Todo/Todo.js';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../features/todosSlice/todosSlice';
import { Transition, List } from 'semantic-ui-react';
import { Droppable } from 'react-beautiful-dnd';

export const TodoList = props => {
  const todos = useSelector(selectTodos);

  return (

        <Droppable droppableId='1'>
          {provided => (
            <div
              className='TodoList'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <List
                size='huge'
                verticalAlign='middle'
              >
                {todos.map(
                  (todo, index) => {
                    const id = 'todo-'+index;
                    return (
                      <List.Item key={index}>
                        <Todo content={todo} id={id} index={index}></Todo>
                      </List.Item>
                    )
                  }
                )}
              </List>
              {provided.placeholder}
            </div>
            )}
        </Droppable>
  )
}

{/* <Transition.Group
  as={List}
  animation='fade left'
  duration={200}
  size='huge'
  verticalAlign='middle'
> */}
