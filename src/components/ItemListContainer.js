import React, {useState, useEffect} from 'react'
import '../index.css'
import {productos} from '../mock/productos'
import ItemList from './ItemList';
import Main from './Main/Main';

const ItemListContainer = (prop) => {

    const {saludo} = prop;
    const [items, setItems] = useState([]);
    
    useEffect ( () => {
      const getProductos = new Promise ( (res, rej) => {
        setTimeout ( () => {
          res (productos);
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
    }, []);
    
    return (
      <div>
        <h2 className='saludo'>{saludo}</h2>
        <Main />
        <ItemList items={items} />
      </div>
  );
};

export default ItemListContainer;