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
    }
  }
});

export const selectTodos = (state) => state.todos;

export const {
  addTodo,
  removeTodo
} = todosSlice.actions

export default todosSlice.reducer
