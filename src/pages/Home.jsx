import React, { useState, useEffect, useContext, useRef } from 'react';
import { motion } from 'motion/react';
import wave from "../assets/wave.png";
import arrow from "../assets/arrow.png";

import img1 from "../assets/galery/img1.png"
import img2 from "../assets/galery/img2.png"
import img3 from "../assets/galery/img3.png"

import bg1 from "../assets/bg-home.png"
import bg2 from "../assets/bg-section-2.png"
import bg3 from "../assets/bg-section-3.png"
import bg4 from "../assets/bg-section-2.png"


import { MyContext } from '../context/context';
import Container from '../components/Container';

const Home = () => {
    const secciones = [
        <Seccion1 />,
        <Seccion2 />,
        <Seccion3 />,
        <Seccion4 />,
    ];
    const [images, setImages] = useState([bg1, bg2, bg3, bg4]);
    const seccionHeight = window.innerHeight;
    const middlePosition = window.innerHeight / 2;

    const { bullet, setBullet } = useContext(MyContext);

    useEffect(() => {
        const handleBullets = () => {
            const scrollPosition = window.scrollY;
            const nuevaSeccion = Math.floor(scrollPosition / seccionHeight);

            if (seccionHeight < scrollPosition) {
                setBullet(nuevaSeccion)
            } else {
                setBullet(0)
            }
        };

        window.addEventListener('scroll', handleBullets);

        return () => {
            window.removeEventListener('scroll', handleBullets);
        };

    }, [seccionHeight, bullet]);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.body.offsetHeight;
            const windowHeight = window.innerHeight;
            const porcentaje = (scrollPosition / (documentHeight - windowHeight)) * 100;

            if (porcentaje > 24 && porcentaje < 26) {
                console.log("lanzar animacion")
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <Container bullet={bullet}>
            {secciones.map((Seccion, index) => (
                <div key={index} className="seccion">
                    <img src={images[bullet]} alt="" className='images-bg'></img>
                    {Seccion}
                </div>
            ))}
        </Container>
    );
};

const Seccion1 = () => {
    const [paralaxPosition, setParalaxPosition] = useState({ x: 0, y: 0 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const paralaxSpeed = 0.05; // ajusta la velocidad del paralax
        const paralaxX = mousePosition.x * paralaxSpeed;
        const paralaxY = mousePosition.y * paralaxSpeed;
        setParalaxPosition({ x: paralaxX, y: -paralaxY });
    }, [mousePosition]);



    return <section className="home section-0">
        <div className="title">
            <motion.div className="circle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}

                style={{
                    transform: `translate(${paralaxPosition.x}px, ${paralaxPosition.y}px)`,
                    transition: 'transform 0.1s ease-out',
                }}></motion.div>
            <div className='text-wave'>

                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}>Un refugio de paz y tranquilidad</motion.h2>
                <img src={wave} alt=""></img>
            </div>
        </div>
        <a href=""><h1>Los cuatro amaneceres</h1></a>
        <div className="discover">
            <h3>Descubre nuestro refugio</h3>
        </div>
    </section >
}
const Seccion2 = () => {
    const [paralaxPosition, setParalaxPosition] = useState({ x: 0, y: 0 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const paralaxSpeed = 0.05; // ajusta la velocidad del paralax
        const paralaxX = mousePosition.x * paralaxSpeed;
        const paralaxY = mousePosition.y * paralaxSpeed;
        setParalaxPosition({ x: paralaxX, y: paralaxY });
    }, [mousePosition]);

    return <section className="galery section-1">
        <div className="title">
            <div className="circle"
                style={{
                    transform: `translate(${paralaxPosition.x}px, ${paralaxPosition.y}px)`,
                    transition: 'transform 0.1s ease-out',
                }}></div>
            <h2>Espacios de serenidad</h2>
        </div>
        <div className='galery-images'>
            <div className='container-images'>
                <div className='img'>
                    <img src={img1} alt=""></img>
                </div>
                <div className='img'>
                    <img src={img2} alt=""></img>
                </div>
                <div className='img'>
                    <img src={img3} alt=""></img>
                </div>
                <div className='img'>
                    <img src={img3} alt=""></img>
                </div>
                <div className='img'>
                    <img src={img3} alt=""></img>
                </div>
                <div className='img'>
                    <img src={img3} alt=""></img>
                </div>
                <div className='img'>
                    <img src={img3} alt=""></img>
                </div>
                <div className='img'>
                    <img src={img3} alt=""></img>
                </div>
            </div>
        </div>
        <div className="progress-bar">
            <p>Nuestras habitaciones están diseñadas para que te sientas en casa, con todo lo necesario para una estancia relajante.</p>
            <div className='progress'>
                <div className='dot'></div>
            </div>
        </div>
    </section>
}
const Seccion3 = () => {
    const contentEl = useRef();
    const [active, setActive] = useState(null);
    const items = [{
        title: "Habitaciones",
        description: "Sector Campo: 10 Habitaciones cuádruples. Sector Bosque: 8 Habitaciones triples. Sector Piscina: 5 habitaciones cuádruples. Sector Spa: 5 Habitaciones triples/cuádruples. (Todas con baños privados, aire acondicionado y calefacción)."
    }, {
        title: "Pension completa",
        description: "Sector Campo: 10 Habitaciones cuádruples. Sector Bosque: 8 Habitaciones triples. Sector Piscina: 5 habitaciones cuádruples. Sector Spa: 5 Habitaciones triples/cuádruples. (Todas con baños privados, aire acondicionado y calefacción)."
    }, {
        title: "Piscina exterior",
        description: "Sector Campo: 10 Habitaciones cuádruples. Sector Bosque: 8 Habitaciones triples. Sector Piscina: 5 habitaciones cuádruples. Sector Spa: 5 Habitaciones triples/cuádruples. (Todas con baños privados, aire acondicionado y calefacción)."
    }, {
        title: "Salones para actividades",
        description: "Sector Campo: 10 Habitaciones cuádruples. Sector Bosque: 8 Habitaciones triples. Sector Piscina: 5 habitaciones cuádruples. Sector Spa: 5 Habitaciones triples/cuádruples. (Todas con baños privados, aire acondicionado y calefacción)."
    }]

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return <section className='services section-2'>
        <div className='title'>
            <h2>Servicios</h2>
            <div className='semi-circle'></div>
        </div>
        <div className='descriptions'>
            {
                items.map((item, index) => (
                    <div className='item' key={index}>
                        <h3 className='active' onClick={() => handleToggle(index)}>{item.title}</h3>
                        <div
                            className={`collapse ${active === index ? "show" : ""}`}
                            ref={contentEl} style={
                                active === index
                                    ? { height: contentEl.current.scrollHeight + 20 }
                                    : { height: "0px" }
                            }>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
}
const Seccion4 = () => {
    return <section className='contact section-3'>
        <div className='title'>
            <h2>Los cuatro amaneceres</h2>
        </div>
        <div className='info'>
            <div>
                <h3>Explora y descubre</h3>
            </div>
            <div className='description'>
                <p>Los Cuatro Amaneceres es un complejo de 27 hectáreas rodeadas de bosque  ubicado en el tradicional pueblo Tomás Jofré, Partido de Mercedes,  Buenos Aires. A tan solo 94Km de CABA. Es un lugar para descansar y  conectar con la naturaleza.</p>
            </div>

        </div>
        <div className='line'></div>
        <div className='info'>
            <div>
                <h3>Datos de contacto</h3>
            </div>
            <div className='description'>
                <ul>
                    <li>Dirección: RP N° 42,6600 Mercedes, Tomas Jofré, Bs. As.</li>
                    <li>Teléfono: 114973 4305</li>
                    <li>WhatsApp: 115959-7773</li>
                    <li>E-mail: info@loscuatroamaneceres.com.ar</li>
                </ul>
            </div>
        </div>

        <div className='reserve'>
            <span>Reserva</span>
            <img src={arrow} alt=""></img>
        </div>
    </section>
}

export default Home;