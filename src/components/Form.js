import React, {useState} from 'react'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import {db} from '../firebaseConfig';
import { useContext } from 'react';
import { cartContext } from '../context/CartContext';

const Form = ({precio, carrito, handleIdCompra, handleOrdenCompra}) => {

    const {clear} = useContext(cartContext);

    const [nombre, setNombre] = useState ('');
    const [apellido, setApellido] = useState ('');
    const [direccion, setDireccion] = useState ('');
    const [telefono, setTelefono] = useState ('');
    const [correo, setCorreo] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nombre, apellido, direccion, telefono, correo);
        const order = {
            buyer: {
                nombre: nombre,
                apellido: apellido,
                direccion: direccion,
                telefono: telefono,
                correo: correo,
            },
            item: carrito,
            total: precio,
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
            // console.log("Finally")
        });
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
 
  return (
    <div>
        <h3 className='formulario'>Complete los datos para realizar la compra</h3>
        <form action="" className='formulario' onSubmit={handleSubmit}>
            <input className='inputFormulario' type="text" name='nombre' value={nombre} placeholder = 'nombre' onChange={handleNombre}/>
            <input className='inputFormulario' type="text" name='apellido' value={apellido} placeholder = 'apellido' onChange={handleApellido}/>
            <input className='inputFormulario' type="text" name='direccion' value={direccion} placeholder = 'dirección' onChange={handleDireccion}/>
            <input className='inputFormulario' type="number" name='telefono' value={telefono} placeholder = 'teléfono' onChange={handleTelefono}/>
            <input className='inputFormulario' type="email" name='correo' value={correo} placeholder = 'email' onChange={handleCorreo}/>
            <button className='botonAgregar'>Realizar Pedido</button>
        </form>
    </div>
  )
}

export default Form