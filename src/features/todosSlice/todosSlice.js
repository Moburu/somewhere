import { createSlice } from '@reduxjs/toolkit'

const initialState = ['Sample todo'];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        todo => todo === action.payload
      );
    }
  }
});

export const selectTodos = (state) => state.todos;

export const {
  addTodo,
  removeTodo
} = todosSlice.actions

export default todosSlice.reducer
