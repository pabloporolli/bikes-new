import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto, stock, inicial, onAdd}) => {
console.log("Producto en ItemDetail: ", producto);
  return (
    <>
        {producto.id ? (
        <div className='contenedorDetalle'>
            <div className='imagenTextos'>
                <div>
                    <img src={producto.img} alt="" className='fotoMadoneDetail' />
                </div>
                <div className='textosDetalle'>
                    <span>Marca: {producto.title}</span>
                    <span className='modeloDetalle'>Modelo: {producto.description}</span>
                    <span>Precio: USD {producto.price}</span>
                    <span>Stock: {producto.stock}</span>
                    <span>Categoría: {producto.category}</span>
                </div>
            </div>
            <div>
            <ItemCount stock={producto.stock} inicial={inicial} onAdd={onAdd}/>
            </div>
        </div> )
        :  <h2 className='cargando'>Cargando...</h2>
    }
    </>
)
};


export default ItemDetail