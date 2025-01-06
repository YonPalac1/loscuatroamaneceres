import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import img1 from "../assets/galery/img1.png"
import img2 from "../assets/galery/img2.png"
import img3 from "../assets/galery/img3.png"

const Galery = ({ bullet }) => {
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

        <div className="galery-images">
                <div className='img'>
                    <img src={img1} alt=""></img>
                </div>
                <div className='img'>
                    <img src={img2} alt=""></img>
                </div>
                <div className='img'>
                    <img src={img3} alt=""></img>
                </div>
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
export default Galery;