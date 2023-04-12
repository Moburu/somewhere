import './App.css';
import Navbar from '../Navbar/Navbar.js';
import TodoApp from '../TodoApp/TodoApp';
import { reorderTodo } from '../../features/todosSlice/todosSlice';
import { useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setTodos(fetchLocalState()));
  // }, [dispatch])

  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const coordinates = {
      oldIndex: source.index,
      newIndex: destination.index,
      oldColumn: source.droppableId,
      newColumn: destination.droppableId
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
