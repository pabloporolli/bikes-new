import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto, stock, inicial, onAdd}) => {
console.log("Producto: ", producto);
  return (
    <>
        {producto.id ? (
        <div className='contenedorCard'>
            <span>Marca: {producto.title}</span>
            <span className='modelo'>Modelo: {producto.description}</span>
            <span>Precio: USD {producto.price}</span>
            <span>Stock: {producto.stock}</span>
            <span>Categoría: {producto.category}</span>
            <img src={producto.img} alt="" className='fotoMadone' />
            <ItemCount stock={producto.stock} inicial={inicial} onAdd={onAdd}/>
        </div> )
        :  <h2 className='cargando'>Cargando...</h2>
    }
    </>
)
}


export default ItemDetail