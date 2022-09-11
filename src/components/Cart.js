import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/CartContext'

const Cart = () => {
  
  const {cart, removeItem} = useContext(cartContext);

  return (
    <div className='contenedorCarrito'>
      {cart.map((item) => {
        return (
          <div key={item.id} className='carrito'>
            <table>
              <tbody>
                <tr>
                  <td>ID: {item.id}</td>
                  <td>Marca: {item.title}</td>
                  <td>Cantidad: {item.cantidad}</td>
                  <td>Precio: {item.price}</td>
                  <td>
                    <button onClick={()=>removeItem(item)} className='botonAgregar'>Eliminar producto</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default Cart