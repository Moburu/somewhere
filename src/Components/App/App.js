import './App.css';
import Navbar from '../Navbar/Navbar.js';
import TodoApp from '../TodoApp/TodoApp.js';
import { setTodos, selectTodos } from '../../features/todosSlice/todosSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLocalState } from './store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodos(fetchLocalState()));
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <TodoApp />
    </div>
  );
}

export default App;
