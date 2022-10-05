import { updateDoc, doc, getDoc } from 'firebase/firestore';
import React, { createContext, useState } from 'react'
import { useContext } from 'react';
import { cartContext } from './CartContext';
import {db} from '../firebaseConfig';

export const compraContext = createContext ();

const CompraProvider = (props) => {

    const {calcularTotal, calcularTotalProductos} = useContext(cartContext);

    const cantidadProductos = calcularTotalProductos ();
    const precioTotal = calcularTotal ();
  
    const [idCompra, setIdCompra] = useState ('');
    const handleIdCompra = (id) => {
      setIdCompra(id);
    };
    
    const [orden, setOrden] = useState({});
    const handleOrdenCompra = (or) => {
      setOrden(or);
    }

   const updateStock = (id, cantidad) => {
        console.log(id);
        const productDoc = doc(db, "productos", id);
        getDoc(productDoc)
        .then((prod) =>
        {
            const cantidadOriginal = prod.data().stock;
            const cantidadNueva = cantidadOriginal - cantidad;
            updateDoc(productDoc, {stock: cantidadNueva});
        })
    }  

  return (
    <>
        <compraContext.Provider value = {{cantidadProductos, precioTotal, idCompra, orden, handleIdCompra, handleOrdenCompra, updateStock}}>
            {props.children}
        </compraContext.Provider>
    </>
  )
}

export default CompraProvider