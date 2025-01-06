import React, { useState, useEffect, useContext, useRef } from 'react';
import { useScroll } from 'framer-motion';

import wave from "../assets/wave.png";
import arrow from "../assets/arrow.png";

import bg1 from "../assets/bg-home.png"
import bg2 from "../assets/bg-section-2.png"
import bg3 from "../assets/bg-section-3.png"
import bg4 from "../assets/bg-section-2.png"


import { MyContext } from '../context/context';
import Container from '../components/Container';
import { Reveal } from '../components/Reveal';
import Galery from '../components/Galery';
import Form from '../components/Form';
import Events from '../components/Events';

const Home = () => {
    const { bullet, setHeight } = useContext(MyContext);
    const secciones = [
        <Seccion1 bullet={bullet} />,
        <Galery bullet={bullet} />,
        <Events bullet={bullet} />,
        <Seccion3 bullet={bullet} />,
        <Seccion4 bullet={bullet} />,
    ];
    const [images] = useState([bg1, bg2, bg1, bg3, bg4]);
    const heightRef = useRef(null);

    useEffect(() => {
        console.log(bullet)
        setHeight(heightRef.current.offsetHeight)
    }, [heightRef, bullet])

    return (
        <Container bullet={bullet}>
            {
                images?.map((img, i) => (
                    <img src={img} alt=""
                        style={{
                            opacity: i === bullet ? 1 : 0
                        }}
                        key={i}
                        className='images-bg'
                    ></img>
                ))
            }
            {secciones.map((Seccion, index) => (
                <div key={index} className="seccion" ref={heightRef}>
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

        <div className="discover">
            <Reveal delay={0.8}>
                <h3>Descubre nuestro refugio</h3>
            </Reveal>
        </div>
    </section >
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

    return <section className='services section-3'
        style={{
            display: bullet === 3 ? "flex" : "none"
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
                    <Reveal delay={index} key={index}>
                        <div className='item'>
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
    return <section className='contact section-4'
        style={{
            display: bullet === 4 ? "flex" : "none"
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

        <Form />
    </section>
}

export default Home;