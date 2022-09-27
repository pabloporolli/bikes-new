import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Form from './Form'
import { useState } from 'react'
import ListadoCompra from './ListadoCompra'
import { compraContext } from '../context/CompraContext'

const Cart = () => {
  
  const {cart, removeItem, clear, calcularTotal, calcularTotalProductos} = useContext(cartContext);
  const {cantidadProductos, precioTotal, idCompra, orden} = useContext(compraContext);

  let esCompra = false;

  return (
    <>
    {cantidadProductos !== 0 ? (
    <div className='contenedorCarrito'>
      <ListadoCompra cart={cart} removeItem={removeItem} esCompra={esCompra}/>
      <h2 className='total'>Cantidad de productos: {calcularTotalProductos()}</h2>
      <h2 className='total'>Total: $ {precioTotal}</h2>
      <button onClick={()=>clear()} className='botonVaciar'>Vaciar carrito</button>
      <Link to="/">
        <button className='botonVaciar'>Seguir comprando</button>
      </Link>
      <Link to={"/compra"}>
        <button className='botonVaciar'>Comprar</button>
      </Link>
    </div>
  ) : (
    <div className='contenedorCarritoVacio'>
      <h3>Tu carrito está vacío</h3>
      <p>Te invitamos a conocer nuestros productos</p>
      <Link to="/">
        <button className='botonAgregar'>Ir a la Home</button>
      </Link>
    </div>
  )
  
  }
  </>
  )
}

export default Cart