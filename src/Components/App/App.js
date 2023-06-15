import './App.css';
import Navbar from '../Navbar/Navbar.js';
import TodoApp from '../TodoApp/TodoApp';
import { reorderTodo } from '../../features/todosSlice/todosSlice';
import { useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { auth, googleSignIn, logOut } from '../../features/firebaseInit';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
    return () => {
      unsubscribe();
    }
  }, [user])

  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const coordinates = {
      oldIndex: source.index,
      newIndex: destination.index,
      oldColumn: source.droppableId,
      newColumn: destination.droppableId
    }

    dispatch(reorderTodo(coordinates));
  };

  const handleLogin = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <div className="App">
        <Navbar />
        <TodoApp />
        {user ?
        <button onClick={handleLogout}>Sign Out</button> :
        <button onClick={handleLogin}>Sign In</button>}
      </div>
    </DragDropContext>
  );
}

export default App;
