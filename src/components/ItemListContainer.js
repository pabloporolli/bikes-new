import React, {useState, useEffect} from 'react'
import '../index.css'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../firebaseConfig';

const ItemListContainer = (prop) => {
    const {saludo} = prop;
    const [items, setItems] = useState([]);
    const {categoryName} = useParams();

    useEffect ( () => {
      const itemCollection = collection(db, 'productos');
      
//      categoryName ? getDocs(query(itemCollection, where("category", "==", categoryName))) : getDocs(itemCollection)
      
      if (categoryName){
      getDocs(query(itemCollection, where("category", "==", categoryName)))
      .then ( (res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data()
          }
        })
        setItems(products);
      })
      .catch((error) => {
        console.log("Error");
      })
      .finally(() => {
        // setIsLoading (false);
      })
    }
    else {
      getDocs(query(itemCollection))
      .then ( (res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data()
          }
        })
        setItems(products);
      })
      .catch((error) => {
        console.log("Error");
      })
      .finally(() => {
        // setIsLoading (false);
      })
    }
    },[categoryName]);
    
 /*    useEffect ( () => {
      const getProductos = new Promise ( (res, rej) => {
        const prodFiltrados = productos.filter(
          (prod) => prod.category === categoryName
        );
        setTimeout ( () => {
          res (categoryName ? prodFiltrados : productos);
        }, 500);
      });
      getProductos
      .then ((data) => {
        setItems (data);
      })
      .catch ((error) => {
      })
      .finally (() => {
//        console.log ("Finally");
      })
    }, [categoryName]); */



    return (
      <div>
        <h2 className='saludo'>{saludo}</h2>
        <ItemList items={items} />
      </div>
  );
};

export default ItemListContainer;