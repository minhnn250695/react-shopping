import logo from './logo.svg';
import './App.css';
import categoryApi from './api/categoriesAPI';
import { useEffect } from 'react';
import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Album/pages';
import Clock from './features/Clock/pages';

function App() {
  useEffect(() => {}, []);
  const fetcheCategories = async () => {
    const params = { _limit: 1 };
    const categories = await categoryApi.getAll(params);
    console.log(categories);
  };

  return (
    <div className="App">
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
      <Clock />
    </div>
  );
}

export default App;
