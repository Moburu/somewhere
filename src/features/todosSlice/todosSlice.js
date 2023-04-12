import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: ['yada', 'dada'],
  in_progress: ['trada', 'skada']
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    removeTodo: (state, action) => {
      const { columnName, content } = action.payload;
      if (columnName === 'todo') {
        return {
          ...state,
          todo: state['todo'].filter(
            (todo) => todo !== content
          )
        }
      } else if (columnName === 'in_progress') {
        console.log(columnName);
        return {
          ...state,
          in_progress: state['in_progress'].filter(
            (todo) => todo !== content
          )
        }
      } else {
        return {
          ...state,
          completed: state['completed'].filter(
            (todo) => todo !== content
          )
        }
      }

    },
    editTodo: (state, action) => {
      const { columnName, toBeEdited, content } = action.payload;
      if (columnName === "todo") {
        return {
        ...state,
        todo: state['todo'].map(
          (todo, index) => {
            if (index === toBeEdited) {
              return content;
            }
            else {
              return todo;
            }
          })}
      } else if (columnName === 'in_progress') {
        return {
          ...state,
          in_progress: state['in_progress'].map(
            (todo, index) => {
              if (index === toBeEdited) {
                return content;
              }
              else {
                return todo;
              }
        })}
      } else {
        return {
          ...state,
          completed: state['completed'].map(
            (todo, index) => {
              if (index === toBeEdited) {
                return content;
              }
              else {
                return todo;
              }
        })}
      }},
    reorderTodo: (state, action) => {
      const { oldIndex, newIndex, oldColumn, newColumn } = action.payload;
      const toBeSwapped = state[oldColumn].splice(oldIndex, 1);
      state[newColumn].splice(newIndex, 0, toBeSwapped);
    }
  }
});

export const selectTodos = (state) => state.todos;

export const {
  setTodos,
  addTodo,
  removeTodo,
  editTodo,
  reorderTodo
} = todosSlice.actions

export default todosSlice.reducer
