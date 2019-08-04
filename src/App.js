import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Routes from './Routes';


function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
