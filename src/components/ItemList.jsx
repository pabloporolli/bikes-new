import React from 'react'
import Item from './Item';

const ItemList = (prop) => {

  const {items} = prop;

    return (
    <div  className='contenedorGeneral'>
        {items.map ((item) => {
            return (
                <div key={item.id}>
                    <Item item={item}/>
                </div>
            )})
        }

    </div>
    )
}

export default ItemList