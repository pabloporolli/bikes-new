import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import ItemCount from './ItemCount'

const ItemDetail = ({producto, stock}) => {

const {addItem, getProdQty} = useContext (cartContext);
const [cantidad, setCantidad] = useState (0);

const onAdd = (cant, id) => {
    setCantidad(cant);
    addItem(producto, cant);
};

const cantidadProductos = getProdQty(producto.id);

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
                    <div>
                    <ItemCount producto={producto} stock={producto.stock} inicial={cantidadProductos} onAdd={onAdd}/>
                    </div>
                    <div className='botonesItemDetail'>
                        <Link to = '/cart'>
                            <button className='botonAgregar'>Terminar mi compra</button>
                        </Link>
                    </div>
                    </>
                ) : (
                    <div>
                    <ItemCount producto={producto} stock={producto.stock} inicial={cantidadProductos} onAdd={onAdd}/>
                    </div>
                )}

        </div> )
        :  <h2 className='cargando'>Cargando...</h2>
    }
    </>
)
};


export default ItemDetail