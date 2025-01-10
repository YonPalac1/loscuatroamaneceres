import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { GALERY } from "../../contants";

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
        id="espacios"
        style={{
            display: bullet === 1 ? "flex" : "none"
        }}
    >
        <Swiper
            autoplay
            spaceBetween={0}
            pagination={{ clickable: true }}
            slidesPerView={4}
            breakpoints={{
                300: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },

                382: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
        >
            {
                GALERY.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img className="img-slider" src={img}></img>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        <div className="progress-bar">
            <Reveal delay={0.5}>
                <p>Contamos con habitaciones. 3 salones 70m2, 120m2 y 260m2 y espacios verdes para actividades. Además disponemos de un bosque de 8 hectareas, comedor y servicio de gastronomia de cocina natural.</p>
            </Reveal>
            <div className='progress'>
                <div className='dot'></div>
            </div>
        </div>
    </section>
}
export default Galery;