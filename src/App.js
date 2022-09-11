import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}


export default App;
