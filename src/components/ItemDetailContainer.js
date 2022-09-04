import React, {useState, useEffect} from 'react'
import {productos} from '../mock/productos'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {

    const {stock, inicial, onAdd} = props;
    const [producto, setProducto] = useState ({});

    useEffect ( () => {
        const getProducto = new Promise ( (res, rej) => {
            setTimeout ( () => {
                res (productos.find( (producto) => producto.id === 1));
            }, 2000);
        });
    getProducto
    .then ((data) => {
        setProducto(data);
        console.log (data);
    })
    .catch ((error) => {
    })
    .finally (() => {
        console.log ("Finally");
    })
    }, []);

  return (
    <div>
        <ItemDetail producto = {producto} stock={stock} inicial={inicial} onAdd={onAdd}/>
    </div>
  )

}

export default ItemDetailContainer