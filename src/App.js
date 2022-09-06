import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import './index.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';


const App = () => {

  let stock = 10;
  let inicial = 0;

  const onAdd = (cantidad) => {
    console.log(`Agregaste al carrito ${cantidad} unidades.`);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer/>
      </BrowserRouter>
    </>
  )
}


export default App;
