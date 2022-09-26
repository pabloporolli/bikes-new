import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Form from './Form'
import { useState } from 'react'
import ListadoCompra from './ListadoCompra'

const Cart = () => {
  
  const {cart, removeItem, clear, calcularTotal, calcularTotalProductos} = useContext(cartContext);

  const cantidadProductos = calcularTotalProductos ();
  const precioTotal = calcularTotal ();

  const [idCompra, setIdCompra] = useState ('');
  const handleIdCompra = (id) => {
    setIdCompra(id);
  };
  console.log(idCompra);

  const [orden, setOrden] = useState({});
  const handleOrdenCompra = (res) => {
    setOrden(res);
  }

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
      <section>
        <Form precio={precioTotal} carrito={cart} handleIdCompra={handleIdCompra} handleOrdenCompra={handleOrdenCompra}/>
      </section>
    </div>
  ) : idCompra ? (
    <div className='contenedorResumenCompra'>
      { esCompra = true}
      <div className=''>
        <h3>Muchas gracias por tu compra</h3>
        <p>El ID de tu compra es {idCompra}</p>
        <div className='detalleCompra'>
          <h5>Detalle de tu compra</h5>
          <ListadoCompra cart={orden.item} removeItem={removeItem} esCompra={esCompra} />
          <p>Monto total: {orden.total}</p>
        </div>
      </div>
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