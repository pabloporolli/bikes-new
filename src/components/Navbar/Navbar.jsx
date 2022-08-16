import React from 'react'
import '../../index.css'

const Navbar = () => {
  return (
    <nav className='contenedorNav'>
        <ul className='contenedorUl'>
            <div className='contenedorLogo'>
                <a href="https://google.com" className='typoLogo'>Bike</a>
            </div>
            <div className='contenedorLista'>
                <a href="https://google.com">Productos</a>
                <a href="https://google.com">Nosotros</a>
                <a href="https://google.com">Contacto</a>
            </div>
        </ul>
    </nav>
  );
};

export default Navbar