import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main/Main';
import './index.css';
import ItemCount from './components/itemCount';


const App = () => {

  let stock = 10;
  let inicial = 0;

  const onAdd = (cantidad) => {
    console.log(`Agregaste al carrito ${cantidad} unidades.`);
  };

  return (
    <>
      <Header />
      <ItemListContainer saludo='Hola, bienvenido a Bike. Acá podrás encontrar las mejores bicicletas para vos.'/>
      <Main/>
      <ItemCount stock={stock} inicial={inicial} onAdd={onAdd}/>
      <Footer/>
    </>
  )
}


export default App;
