import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../../firebaseConfig';
import {getDoc, doc, collection} from 'firebase/firestore';

const ItemDetailContainer = (props) => {

    const {stock, inicial} = props;
    const [producto, setProducto] = useState ({});
    const {idProd} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect ( () => {
        const itemCollection = collection(db, 'productos');
        const ref = doc(itemCollection, idProd);
        getDoc(ref)
        .then((res) => {
            setProducto(({
                id: res.id,
                ...res.data(),
            }))
            setIsLoading(false);
        })
    }, [idProd])
    
    return (
    <div>
        {
            isLoading ? <div className='loader'></div> : (
                <>
                    <ItemDetail producto = {producto} stock={stock} inicial={inicial}/>
                </>
            )
        }
    </div>
  )

}

export default ItemDetailContainer