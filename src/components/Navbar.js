import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { slides } from '../data'; 
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

function Navbar() {
  const  [click, setClick] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
             The bird
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times': 'fas fa-bars' } />
            </div>
            <ul className={click ? 'nav-menu active' :'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
{/* 
              <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
*/}
              <li className='nav-item'>
                <Link to='#' className='nav-links' onClick={() => setOpen(true)}>
                  Gallery
                </Link>
              </li>


              <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
        </div>
      </nav>

      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />

    </>
  )
}

export default Navbar