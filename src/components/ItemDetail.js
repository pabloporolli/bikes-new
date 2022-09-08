import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

const ItemDetail = ({producto, stock, inicial}) => {
console.log("Producto en ItemDetail: ", producto);

const [cantidad, setCantidad] = useState (0);

const onAdd = (cantidad) => {
    setCantidad(cantidad);
    console.log(`Agregaste al carrito ${cantidad} unidades.`);
  };

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

            {cantidad !== 0
                ? (
                    <Link to = '/cart'>
                        <button className='botonAgregar'>Ir al carrito</button>
                    </Link>
                ) : (
                    <div>
                    <ItemCount stock={producto.stock} inicial={inicial} onAdd={onAdd}/>
                    </div>
                )}

        </div> )
        :  <h2 className='cargando'>Cargando...</h2>
    }
    </>
)
};


export default ItemDetail