import React from 'react'

const ListadoCompra = (props) => {

    const carro = props.cart;
    const removeItem = props.removeItem;
    const esCompra = props.esCompra;

    console.log("Cart en ListadoCompra", carro);

  return (
    <>
    {carro.map((item) => {
        return (
          <div key={item.id} className='carrito'>
            <table className='rowTabla'>
              <tbody>
                <tr>
                  <td>Marca: {item.title}</td>
                  <td>Modelo: {item.description}</td>
                  <td>Cantidad: {item.cantidad}</td>
                  <td>Precio: {item.price}</td>
                   { esCompra === false ? (
                  <td>
                    <button onClick={()=>removeItem(item)} className='botonEliminar'>Eliminar producto</button>
                  </td>
                ) : (<td></td>)}
                </tr>
              </tbody>
            </table>
          </div>
        )
      })}
    </>
  )
}

export default ListadoCompra