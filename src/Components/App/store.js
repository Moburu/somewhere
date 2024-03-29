import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../../features/todosSlice/todosSlice'
import userReducer from '../../features/userSlice/userSlice'

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        user: userReducer
    }
});

export const fetchLocalState = () => {
    try {
      const jsonizedTodos = localStorage.getItem('todos');
      if (jsonizedTodos === null) {
        return [];
      }
      return JSON.parse(jsonizedTodos);
    } catch (err) {
      console.log(err);
      return []
    }
}

const saveState = () => {
    try {
      const { todos } = store.getState()
      const jsonizedTodos = JSON.stringify(todos);
      localStorage.setItem('todos', jsonizedTodos);
    } catch (err) {
      console.log(err);
    }
}

store.subscribe(saveState);
