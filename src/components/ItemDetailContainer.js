import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {productos} from '../mock/productos'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {

    const {stock, inicial} = props;
    const [producto, setProducto] = useState ({});
    const {idProd} = useParams();
    const idProdNumerico = Number(idProd);

    useEffect ( () => {
        const getProducto = new Promise ( (res, rej) => {
            const prodUnico = productos.find(
                (prod) => prod.id === idProdNumerico);
            setTimeout ( () => {
                res (idProd ? prodUnico : productos);
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
    }, [idProdNumerico, idProd]);

console.log ("Producto en ItemDetailContainer: ", producto);
    
    return (
    <div>
        <ItemDetail producto = {producto} stock={stock} inicial={inicial}/>
    </div>
  )

}

export default ItemDetailContainer