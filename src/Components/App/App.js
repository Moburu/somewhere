import './App.css';
import Navbar from '../Navbar/Navbar.js';
import TodoApp from '../TodoApp/TodoApp.js';
import { setTodos, selectTodos } from '../../features/todosSlice/todosSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLocalState } from './store';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodos(fetchLocalState()));
  }, [dispatch])

  const onDragEnd = result => {};

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <div className="App">
        <Navbar />
        <TodoApp />
      </div>
    </DragDropContext>
  );
}

export default App;
