import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },
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
  setTodos,
  addTodo,
  removeTodo,
  editTodo
} = todosSlice.actions

export default todosSlice.reducer
