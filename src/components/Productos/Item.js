import React from 'react'
import { Link } from 'react-router-dom';

const Item = (prop) => {
    const {item} = prop;
  return (
    <div>
        <div className='contenedorCard'>
            <span>Marca: {item.title}</span>
            <span className='modelo'>Modelo: {item.description}</span>
            <span>Precio: USD {item.price}</span>
            <span>Stock: {item.stock}</span>
            <span>Categoría: {item.category}</span>
            <img src={item.img} alt="" className='fotoMadone' />
            <Link to ={`/detail/${item.id}`}>
              <button className='botonAgregar'>Ver Detalles</button>
            </Link>
        </div>
     </div>
  )
}

export default Item