import React, {useState, useEffect} from 'react'
import '../index.css'
import {productos} from '../mock/productos'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (prop) => {
    const {saludo} = prop;
    const [items, setItems] = useState([]);
    const {categoryName} = useParams();

    useEffect ( () => {
      const getProductos = new Promise ( (res, rej) => {
        const prodFiltrados = productos.filter(
          (prod) => prod.category === categoryName
        );
        setTimeout ( () => {
          res (categoryName ? prodFiltrados : productos);
        }, 2000);
      });
      getProductos
      .then ((data) => {
        setItems (data);
      })
      .catch ((error) => {
      })
      .finally (() => {
        console.log ("Finally");
      })
    }, [categoryName]);
    
    return (
      <div>
        <h2 className='saludo'>{saludo}</h2>
        <ItemList items={items} />
      </div>
  );
};

export default ItemListContainer;