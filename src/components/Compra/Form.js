import React, {useState} from 'react'
import { collection, serverTimestamp, addDoc} from 'firebase/firestore';
import {db} from '../../firebaseConfig';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { compraContext } from '../../context/CompraContext';
import ListadoCompra from './ListadoCompra';

const Form = () => {

    const {clear, cart, removeItem} = useContext(cartContext);
    const {cantidadProductos, precioTotal, idCompra, orden, handleIdCompra, handleOrdenCompra, updateStock} = useContext(compraContext);

    const [nombre, setNombre] = useState ('');
    const [apellido, setApellido] = useState ('');
    const [direccion, setDireccion] = useState ('');
    const [telefono, setTelefono] = useState ('');
    const [correo, setCorreo] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: {
                nombre: nombre,
                apellido: apellido,
                direccion: direccion,
                telefono: telefono,
                correo: correo,
            },
            item: [...cart],
            total: precioTotal,
            date: serverTimestamp(),
        };
        
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order)
        .then( (res) => {
            handleIdCompra(res.id);
            handleOrdenCompra(order);
            clear();
        })
        .catch((error) => {
            console.log("error")
        })
        .finally(() => {
        });

        for (let objeto of order.item){
            updateStock(objeto.id, objeto.cantidad);
        }
    };

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleApellido = (e) => {
        setApellido(e.target.value);
    }

    const handleDireccion = (e) => {
        setDireccion(e.target.value);
    }

    const handleTelefono = (e) => {
        setTelefono(e.target.value);
    }

    const handleCorreo = (e) => {
        setCorreo(e.target.value);
    }
 
    let esCompra = false;

  return (
    idCompra ? (
        <div className='contenedorResumenCompra'>
          { esCompra = true}
          <div className=''>
            <h3>Muchas gracias por tu compra</h3>
            <p>El ID de tu compra es {idCompra}</p>
            <div className='detalleCompra'>
              <h5>Detalle de tu compra</h5>
              <ListadoCompra cart={orden.item} removeItem={removeItem} esCompra={esCompra} />
              <p>Monto total: {orden.total}</p>
            </div>
          </div>
        </div>
      ) : 
    <div>
        {cantidadProductos !== 0 ? (
        <>
            <h3 className='tituloForm'>Complete los datos para realizar la compra</h3>
            <form action="" className='formulario' onSubmit={handleSubmit}>
                <input className='inputFormulario' type="text" required name='nombre' value={nombre} placeholder = 'nombre' onChange={handleNombre}/>
                <input className='inputFormulario' type="text" required name='apellido' value={apellido} placeholder = 'apellido' onChange={handleApellido}/>
                <input className='inputFormulario' type="text" required name='direccion' value={direccion} placeholder = 'dirección' onChange={handleDireccion}/>
                <input className='inputFormulario' type="number" required name='telefono' value={telefono} placeholder = 'teléfono' onChange={handleTelefono}/>
                <input className='inputFormulario' type="email" required name='correo' value={correo} placeholder = 'email' onChange={handleCorreo}/>
                <button className='botonAgregar'>Realizar Pedido</button>
            </form>
        </>
        ) : <div className='noCompra'>Aún no has hecho una compra.</div>
        }
    </div>
  )
}

export default Form