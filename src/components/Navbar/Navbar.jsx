import React from 'react'
import '../../index.css'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='contenedorNav'>
        <ul className='contenedorUl'>
            <div className='contenedorLogo'>
                <Link to = "/" className='typoLogo'>Bike</Link>
            </div>
            <div className='contenedorLista'>
                <Link to = "/category/Ruta">Ruta</Link>
                <Link to = "/category/Triatlon">Triatlón</Link>
                <Link to = "/category/Montaña">Montaña</Link>
            </div>
            <Link to = "/cart">
              <CartWidget/>
            </Link>
        </ul>
    </nav>
  );
};

export default Navbar