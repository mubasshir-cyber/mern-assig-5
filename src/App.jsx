import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <h1>Task 5: React Custom Hooks – useFetch</h1>
        <p>Fetching and displaying products using a reusable custom hook</p>
      </header>

      <main className="content">
        <ProductList />
      </main>

      <footer className="footer">
        <p>React Assignment 5 | Custom Hook (useFetch)</p>
      </footer>
    </div>
  );
}

export default App;
