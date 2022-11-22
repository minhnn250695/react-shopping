import logo from './logo.svg';
import './App.css';
import categoryApi from './api/categoriesAPI';
import { useEffect } from 'react';
import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Album/pages';
import Clock from './features/Clock/pages';
import { createBrowserRouter, RouterProvider, Route, Router } from 'react-router-dom';

function App() {
  useEffect(() => {}, []);
  const fetcheCategories = async () => {
    const params = { _limit: 1 };
    const categories = await categoryApi.getAll(params);
    console.log(categories);
  };

  const router = createBrowserRouter([
    { path: 'todo', element: <TodoFeature /> },
    { path: 'album', element: <AlbumFeature /> },
    { path: 'clock', element: <Clock /> },
  ]);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href={`todo`}>Todo</a>
          </li>
          <li>
            <a href={`album`}>Album</a>
          </li>
        </ul>
      </nav>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
