import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Header from '../sections/Header'
import Main from '../sections/Main'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main/>
        <Header/>
      </header>
    </div>
  );
}

export default App;
