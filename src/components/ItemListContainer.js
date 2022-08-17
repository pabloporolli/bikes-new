import React from 'react'
import '../index.css'

const ItemListContainer = (prop) => {
    const {saludo} = prop;
    return (
        <h2 className='saludo'>{saludo}</h2>
  );
};

export default ItemListContainer;