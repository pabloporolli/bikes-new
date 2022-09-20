import React, {useState} from 'react'

const ItemCount = ({producto, stock, inicial = 0, onAdd}) => {
//console.log("Inicial: ", inicial);
const [count, setCount] = useState(inicial);


let restar = () => {
  count > 0 && setCount (count - 1);
}

let sumar = () => {
  count < stock ? setCount (count + 1) : alert("Para comprar más unidades, por favor, comunicarse con el comercio.");
};

let deshabilitado;
count === 0 ? deshabilitado = true : deshabilitado = false;

  return (
    <div className='contenedorSumarAgregar'>
        <div className='contenedorSumar'>
            <button onClick={restar} className='botonMasMenos'>-</button>
            <p className='unidades'>{count} Unidades</p>
            <button onClick={sumar} className='botonMasMenos'>+</button>
        </div>
        <button disabled={deshabilitado} onClick={()=>onAdd(count, producto.id)} className='botonAgregar'>Agregar al carrito</button>
      </div>
  )
}

export default ItemCount