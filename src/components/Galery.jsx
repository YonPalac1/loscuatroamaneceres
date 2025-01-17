import { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/bundle"
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Reveal } from "./Reveal";
import { GALERY } from "../../contants";

const Galery = ({ bullet, setImageView, setImageActive }) => {
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

    const handleImage = (img) => {
        setImageView(img)
        setImageActive(true)
    }

    return <section className="galery section-1"
        id="espacios"
        style={{
            display: bullet === 1 ? "flex" : "none"
        }}
    >
        <Swiper
            className="swip-container"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            scrollbar={{ draggable: true }}
            slidesPerView={4}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
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
                        <Reveal>
                            <img className="img-slider" src={img} onClick={() => handleImage(img)}></img>
                        </Reveal>
                    </SwiperSlide>
                ))
            }
        </Swiper>

        <div className="progress-bar">
            <Reveal delay={0.5}>
                <p>Contamos con habitaciones. 3 salones 70m2, 120m2 y 260m2 y espacios verdes para actividades. Además disponemos de un bosque de 8 hectareas, comedor y servicio de gastronomia de cocina natural.</p>
            </Reveal>
        </div>
    </section>
}
export default Galery;