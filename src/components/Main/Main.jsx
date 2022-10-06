import React from 'react'
import { Route, Routes } from 'react-router-dom';
import '../../index.css'
import ItemDetailContainer from '../Productos/ItemDetailContainer';
import ItemListContainer from '../Productos/ItemListContainer';
import Cart from '../Compra/Cart';
import Form from '../Compra/Form';


const Main = () => {
  return (
    <main >
      <Routes>
        <Route
          path = "/"
          element = {<ItemListContainer saludo="Descubrí nuestra selección de bicis."/>}
        />
        <Route
          path = "/category/:categoryName"
          element = {<ItemListContainer/>}
        />
        <Route
          path = "/detail/:idProd"
          element = {<ItemDetailContainer/>}
        />
        <Route
          path = "/cart"
          element = {<Cart/>}
        />
        <Route
          path = '/compra'
          element = {<Form/>}
        />
      </Routes>
    </main>
  )
}

export default Main