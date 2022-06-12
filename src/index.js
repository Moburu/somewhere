import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './Components/App/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './Components/App/App.js';
import TodoApp from './Components/TodoApp/TodoApp';
import NotesApp from './Components/NotesApp/NotesApp';
import reportWebVitals from './reportWebVitals';
import 'fomantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<TodoApp />}/>
            <Route path="notes" element={<NotesApp />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
