/* eslint-disable no-lone-blocks */
import React from 'react'
import './TodoList.css';
import { Todo } from '../Todo/Todo.js';
 import { useSelector } from 'react-redux';
import { selectTodos } from '../../features/todosSlice/todosSlice';
import { List } from 'semantic-ui-react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export const TodoList = props => {
  const todosObj = useSelector(selectTodos);

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'mediumorchid' : 'lightgrey',
  });

  return (
    <div className='TodoList'>
      {Object.entries(todosObj).map((todoList, outerIndex) => {
        let columnName;
        let draggableClass = 'list-'+outerIndex;
        if (outerIndex === 0) {
          columnName = 'todo';
        } else if (outerIndex === 1) {
          columnName = 'in_progress';
        } else if (outerIndex === 2) {
          columnName = 'completed';
        } else {
          columnName = 'default';
        }
        return (
        <Droppable droppableId={columnName} key={outerIndex} className='draggable'>
          {(provided, snapshot) => {
          return (
            <div
              className={draggableClass}
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <List
                size='huge'
                verticalAlign='middle'
              >
                {todoList[1].map(
                  (todo, innerIndex) => {
                    const id = columnName+'-'+innerIndex;
                    return (
                      <Draggable
                        draggableId={id}
                        index={innerIndex}
                        key={innerIndex}
                      >
                        {(provided) => (
                          <div
                            provided={provided}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <List.Item>
                              <Todo
                                content={todo}
                                id={id}
                                index={innerIndex}
                                columnName={columnName}
                              >
                              </Todo>
                            </List.Item>
                          </div>
                        )}
                      </Draggable>
                    )
                  }
                )}
              </List>
              {provided.placeholder}
            </div>
          )}}
        </Droppable>)
        })}
    </div>
  )
}

{/* <Transition.Group
  as={List}
  animation='fade left'
  duration={200}
  size='huge'
  verticalAlign='middle'
> */}
