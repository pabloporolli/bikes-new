import React from 'react'
import { Route, Routes } from 'react-router-dom';
import '../../index.css'
import ItemDetailContainer from '../ItemDetailContainer';
import ItemListContainer from '../ItemListContainer';
import Cart from '../Cart';
import Form from '../Form';


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