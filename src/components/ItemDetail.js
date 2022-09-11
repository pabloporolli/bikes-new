import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContext';
import ItemCount from './ItemCount'

const ItemDetail = ({producto, stock, inicial}) => {

const {addItem, removeItem, cart, clear} = useContext (cartContext);
const [cantidad, setCantidad] = useState (0);

const onAdd = (cant) => {
    setCantidad(cant);
    addItem(producto, cant);
    console.log(`Agregaste al carrito ${cant} ${producto.title}`);
};

const onRemove = (producto) => {
    removeItem(producto);
    console.log("Producto borrado: ", cart);
    setCantidad(0);
}

const onClear = () => {
    clear();
}

console.log("Cart: ", cart);

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
                    <>
                    <Link to = '/cart'>
                        <button className='botonAgregar'>Ir al carrito</button>
                    </Link>
                    <button onClick={()=>onRemove(producto)} className='botonAgregar'>Eliminar Producto</button>
                    <button onClick={()=>onClear()} className='botonAgregar'>Vaciar carrito</button>
                    </>
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