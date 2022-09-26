import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../firebaseConfig';
import {getDoc, doc, collection} from 'firebase/firestore';

const ItemDetailContainer = (props) => {

    const {stock, inicial} = props;
    const [producto, setProducto] = useState ({});
    const {idProd} = useParams();

    useEffect ( () => {
        const itemCollection = collection(db, 'productos');
        const ref = doc(itemCollection, idProd);
        getDoc(ref)
        .then((res) => {
            setProducto(({
                id: res.id,
                ...res.data(),
            }))
        })
    }, [idProd])
    
    return (
    <div>
        <ItemDetail producto = {producto} stock={stock} inicial={inicial}/>
    </div>
  )

}

export default ItemDetailContainer