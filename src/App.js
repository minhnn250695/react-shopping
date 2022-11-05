import logo from './logo.svg';
import './App.css';
import categoryApi from './api/categoriesAPI';
import { useEffect } from 'react';

function App() {
  useEffect(() => {}, []);
  const fetcheCategories = async () => {
    const categories = await categoryApi.getAll();
    console.log(categories);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Shopping cart</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <button type="button" onClick={fetcheCategories}>
          Get categories
        </button>
      </header>
    </div>
  );
}

export default App;
