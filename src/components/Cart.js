import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  
  const {cart, removeItem, clear, calcularTotal, calcularTotalProductos} = useContext(cartContext);

const cantidadProductos = calcularTotalProductos ();

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
      <Link to="/">
        <button className='botonVaciar'>Seguir comprando</button>
      </Link>
      <button onClick={()=>clear()} className='botonVaciar'>Vaciar carrito</button>
      <h2 className='total'>Cantidad de productos: {calcularTotalProductos()}</h2>
      <h2 className='total'>Total: $ {calcularTotal()}</h2>
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