import { updateDoc, doc } from 'firebase/firestore';
import React, { createContext, useState } from 'react'
import { useContext } from 'react';
import { cartContext } from './CartContext';
import {db} from '../firebaseConfig';

export const compraContext = createContext ();

const CompraProvider = (props) => {

    const {cart, removeItem, clear, calcularTotal, calcularTotalProductos, getProdQt} = useContext(cartContext);

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
    console.log("Orden", orden);
  
/*     const updateStock = () => {
        const productDoc = doc(db, "productos", idProducto);
        updateDoc(productDoc, {stock: 100});
    }
    console.log("idProducto: ", idProducto); */

    // const nuevoStock =  getProdQt(idProducto);

  return (
    <>
        <compraContext.Provider value = {{cantidadProductos, precioTotal, idCompra, orden, handleIdCompra, handleOrdenCompra}}>
            {props.children}
        </compraContext.Provider>
    </>
  )
}

export default CompraProvider