import React, {useState} from 'react'
import madonesl7 from '../img/madonesl7.png';

const ItemCount = ({stock, inicial, onAdd}) => {

const [count, setCount] = useState(0);

let restar = () => {
  count > 0 && setCount (count - 1);
}

let sumar = () => {
  count < stock ? setCount (count + 1) : alert("Para comprar más unidades, comunicarse con el comercio.");
};

let deshabilitado;
count === 0 ? deshabilitado = true : deshabilitado = false;

  return (
    <div className='contenedorCard'>
        <span className='modelo'>Madone SL7</span>
        <span className='precio'>Precio USD 9.000</span>
        <img src={madonesl7} alt="" className='fotoMadone'/>
        <div className='contenedorSumar'>
            <button onClick={restar} className='botonMasMenos'>-</button>
            <p>{count} Unidades</p>
            <button onClick={sumar} className='botonMasMenos'>+</button>
        </div>
        <button disabled={deshabilitado} onClick={()=>onAdd(count)} className='botonAgregar'>Agregar al carrito</button>
      </div>
  )
}

export default ItemCount