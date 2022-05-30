import { createSlice } from '@reduxjs/toolkit'

const initialState = ['Sample todo'];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(
        (todo) => todo !== action.payload
      );
    },
    editTodo: (state, action) => {
      return state.map(
        (todo) => {
          if (todo === action.payload[0]) {
            return action.payload[1];
          }
          else {
            return todo;
          }
        }
      )
    }
  }
});

export const selectTodos = (state) => state.todos;

export const {
  addTodo,
  removeTodo,
  editTodo
} = todosSlice.actions

export default todosSlice.reducer
