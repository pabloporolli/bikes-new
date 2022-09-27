import React, { createContext, useState } from 'react'

export const cartContext = createContext ();

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);
   // const [idProducto, setIdProducto] = useState('');

    const isInCart = (prod) => {
      if (cart.find(i => i.id === prod.id)) {
        return true;
      }
      else{return false}
    }
    
    const addItem = (item, cantidad) => {
      if (isInCart(item)) {
        const newCart = [...cart];
        let indice = cart.indexOf(cart.find(j => j.id === item.id));
        newCart[indice].cantidad = cantidad;
        setCart(newCart);
  //      setIdProducto(item.id);
        }
      else {
      setCart([...cart, {...item, cantidad}]);
      }
    }
   // console.log("idProducto", idProducto);

    const removeItem = (item) => {
      if(isInCart(item)) {
        const newCart = [...cart];     // No se puede hacer una copia con newCart = cart porque lo que se hace es crear un alias, apuntar a un mismo lugar en memoria.
        let indice = cart.indexOf(cart.find(j => j.id === item.id));
        newCart.splice(indice, 1);
        setCart(newCart);
      }
    }

    const clear = () => {
      setCart([]);
    }

    const getProdQty = (id) => {
      const product = cart.find((prod) => prod.id === id)
      return product?.cantidad
    }

    const calcularTotal = () => {
      let acumulador = 0;
      cart.forEach((element) => {
        acumulador += element.price * element.cantidad;
      });
      return acumulador;
    };

    const calcularTotalProductos = () => {
      let acumulador = 0;
      cart.forEach((element) => {
        acumulador += element.cantidad;
      });
      return acumulador;
    };


  return (
    <>
        <cartContext.Provider value = {{cart, addItem, removeItem, clear, getProdQty, calcularTotal, calcularTotalProductos}}>
            {props.children}
        </cartContext.Provider>
    </>
  )
}

export default CartProvider;