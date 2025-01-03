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
import { Reveal } from '../components/Reveal';

const Home = () => {
    const { bullet } = useContext(MyContext);
    const secciones = [
        <Seccion1 bullet={bullet} />,
        <Seccion2 bullet={bullet} />,
        <Seccion3 bullet={bullet} />,
        <Seccion4 bullet={bullet} />,
    ];
    const [images] = useState([bg1, bg2, bg3, bg4]);

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

const Seccion1 = ({ bullet }) => {
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



    return <section className="home section-0"
        style={{
            display: bullet === 0 ? "flex" : "none"
        }}>
        <div className="title">
            <Reveal delay={1}>
                <div className="circle"
                    style={{
                        transform: `translate(${paralaxPosition.x}px, ${paralaxPosition.y}px)`,
                        transition: 'transform 0.1s ease-out',
                    }}></div>
            </Reveal>
            <div className='text-wave'>
                <Reveal delay={0.5}>
                    <h2>Un refugio de paz y tranquilidad</h2>
                </Reveal>
                <img src={wave} alt=""></img>
            </div>
        </div>
        <Reveal delay={0.5}>
            <a href=""><h1>Los cuatro amaneceres</h1></a>
        </Reveal>

        <Reveal delay={1}>
            <div className="discover">
                <h3>Descubre nuestro refugio</h3>
            </div>
        </Reveal>
    </section >
}
const Seccion2 = ({ bullet }) => {
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

    return <section className="galery section-1"
        style={{
            display: bullet === 1 ? "flex" : "none"
        }}
    >
        <div className="title">
            <Reveal delay={1}>
                <div className="circle"
                    style={{
                        transform: `translate(${paralaxPosition.x}px, ${paralaxPosition.y}px)`,
                        transition: 'transform 0.1s ease-out',
                    }}></div>
            </Reveal>
            <Reveal delay={0.5}>
                <h2>Espacios de serenidad</h2>
            </Reveal>
        </div>

        <div className='galery-images'>
            <Reveal delay={1}>
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
            </Reveal>
        </div>
        <div className="progress-bar">
            <Reveal delay={0.5}>
                <p>Nuestras habitaciones están diseñadas para que te sientas en casa, con todo lo necesario para una estancia relajante.</p>
            </Reveal>
            <div className='progress'>
                <div className='dot'></div>
            </div>
        </div>
    </section>
}
const Seccion3 = ({ bullet }) => {
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

    return <section className='services section-2'
        style={{
            display: bullet === 2 ? "flex" : "none"
        }}>
        <div className='title'>
            <Reveal delay={0.5}>
                <h2>Servicios</h2>
            </Reveal>
            <Reveal delay={1}>
                <div className='semi-circle'></div>
            </Reveal>
        </div>
        <div className='descriptions'>
            {
                items.map((item, index) => (
                    <Reveal delay={index}>
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
                    </Reveal>
                ))
            }
        </div>
    </section>
}
const Seccion4 = ({ bullet }) => {
    return <section className='contact section-3'
        style={{
            display: bullet === 3 ? "flex" : "none"
        }}>
        <div className='title'>
            <Reveal delay={0.5}>
                <h2>Los cuatro amaneceres</h2>
            </Reveal>
        </div>
        <Reveal delay={0.8}>
            <div className='info'>
                <div>
                    <h3>Explora y descubre</h3>
                </div>
                <div className='description'>
                    <p>Los Cuatro Amaneceres es un complejo de 27 hectáreas rodeadas de bosque  ubicado en el tradicional pueblo Tomás Jofré, Partido de Mercedes,  Buenos Aires. A tan solo 94Km de CABA. Es un lugar para descansar y  conectar con la naturaleza.</p>
                </div>

            </div>
        </Reveal>
        <div className='line'></div>
        <Reveal delay={1}>
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
        </Reveal>
        <div className='reserve'>
            <span>Reserva</span>
            <img src={arrow} alt=""></img>
        </div>
    </section>
}

export default Home;