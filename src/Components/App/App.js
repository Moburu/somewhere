import './App.css';
import Navbar from '../Navbar/Navbar.js';
import TodoApp from '../TodoApp/TodoApp';
import { setTodos, reorderTodo } from '../../features/todosSlice/todosSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLocalState } from './store';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodos(fetchLocalState()));
  }, [dispatch])

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableID === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const coordinates = {
      oldIndex: source.index,
      newIndex: destination.index
    }

    dispatch(reorderTodo(coordinates));
  };

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
