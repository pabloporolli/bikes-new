import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'


const CartWidget = () => {
  const {calcularTotalProductos} = useContext(cartContext)
  const totalProductos = calcularTotalProductos ();
  
  
  // cart.reduce((accu, item) => accu + item.cantidad, 0)
  
  
  return (
    <div className='contenedorCart'>
        <span className="material-symbols-outlined" id='cart'>
        shopping_cart
        </span>

        {totalProductos !==0 ? (
        <span className='totalEnCart'>{totalProductos}</span>
        ) : (
          <div></div>
        )
        }
    
    </div>
  )
}

export default CartWidget