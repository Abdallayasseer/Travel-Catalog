import React from 'react';
import Catalog from './Catalog';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Travel Catalog</h1>
      </header>
      <main>
        <Catalog />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Travel Catalog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
