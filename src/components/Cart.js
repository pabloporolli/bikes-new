import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Form from './Form'
import { useState } from 'react'

const Cart = () => {
  
  const {cart, removeItem, clear, calcularTotal, calcularTotalProductos} = useContext(cartContext);

const cantidadProductos = calcularTotalProductos ();
const precioTotal = calcularTotal ();

const [idCompra, setIdCompra] = useState ('');
const handleIdCompra = (id) => {
  setIdCompra(id);
};
console.log(idCompra);

  return (
    <>
    {cantidadProductos !== 0 ? (
    <div className='contenedorCarrito'>
      {cart.map((item) => {
        return (
          <div key={item.id} className='carrito'>
            <table className='rowTabla'>
              <tbody>
                <tr>
                  <td>Marca: {item.title}</td>
                  <td>Modelo: {item.description}</td>
                  <td>Cantidad: {item.cantidad}</td>
                  <td>Precio: {item.price}</td>
                  <td>
                    <button onClick={()=>removeItem(item)} className='botonEliminar'>Eliminar producto</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      })}
      <h2 className='total'>Cantidad de productos: {calcularTotalProductos()}</h2>
      <h2 className='total'>Total: $ {precioTotal}</h2>
      <button onClick={()=>clear()} className='botonVaciar'>Vaciar carrito</button>
      <Link to="/">
        <button className='botonVaciar'>Seguir comprando</button>
      </Link>
      <section>
        <Form precio={precioTotal} carrito={cart} handleIdCompra={handleIdCompra} />
      </section>
    </div>
  ) : idCompra ? (
    <div className='contenedorCarritoVacio'>
      <h3>Muchas gracias por tu compra</h3>
      <p>El ID de tu compra es {idCompra}</p>
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