import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context';

import icon from "../assets/icon.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { bullet, setBullet, setVid } = useContext(MyContext);
    const seccionHeight = window.innerHeight;

    useEffect(() => {
        const scrollBullets = () => {
            const scrollPosition = window.scrollY;
            const nuevaSeccion = Math.floor(scrollPosition / seccionHeight);

            if (scrollPosition > seccionHeight) {
                setBullet(nuevaSeccion)
                setVid(nuevaSeccion)
            } else {
                setBullet(0)
                setVid(0)
            }
        };

        window.addEventListener('scroll', scrollBullets);

        return () => {
            window.removeEventListener('scroll', scrollBullets);
        };
    }, [seccionHeight, bullet]);

    const handleBullet = (index) => {
        setBullet(index)
    }
    return <nav>
        <button className='contact-button' onClick={() => handleBullet(5)}>Contactanos</button>
        <div className="nav-items">
            {['home', 'galery', 'habitaciones', 'servicios', 'eventos', 'contacto'].map((seccion, index) => (
                <button onClick={() => handleBullet(index)} key={index} id={`seccion-${index}`} className={`bullet ${index === bullet && "active"}`} data-tooltip={`${seccion}`}>
                    {index === bullet}
                </button>
            ))}
        </div>
        <div onClick={() => handleBullet(0)} className='icon'>
            <img src={icon} alt="los cuatro amaneceres" ></img>
        </div>
    </nav>
}
export default Navbar;