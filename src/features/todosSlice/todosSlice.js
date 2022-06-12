import { createSlice, isAsyncThunkAction } from '@reduxjs/toolkit'

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
        (todo, index) => {
          if (index === action.payload[0]) {
            return action.payload[1];
          }
          else {
            return todo;
          }
        }
      )
    },
    reorderTodo: (state, action) => {
      const { oldIndex, newIndex } = action.payload;
      const toBeSwapped = state.splice(oldIndex, 1);
      state.splice(newIndex, 0, toBeSwapped);
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
