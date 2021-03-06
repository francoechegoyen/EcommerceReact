import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';
import { CartComponentContext } from './Context/CartContext';

const App = props =>{

  return<>
    <CartComponentContext>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </CartComponentContext>
  </>
}

export default App;