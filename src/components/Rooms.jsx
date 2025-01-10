import { Reveal } from "./Reveal";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ATARDECER, AMANECER, BOSQUES } from "../../contants";
import { useState } from "react";


const Rooms = ({ bullet }) => {
    const [rooms, setRooms] = useState(AMANECER)
    
    return <section className="rooms section-2"
        id="espacios"
        style={{
            display: bullet === 2 ? "flex" : "none"
        }}
    >
        <div className="title">
            <Reveal delay={0.5}>
                <h2>Habitaciones</h2>
            </Reveal>
            <Reveal delay={1}>
                <p >En Los  Cuatro Amaneceres ofrecemos habitaciones equipadas con baño privado, calefacción y aire acondicionado. Todas con una espectacular vista a nuestros espacios verdes. Nuestra capacidad máxima es de hasta 126 plazas.</p>
            </Reveal>
        </div>
        <div className="filters">
            <button onClick={() => setRooms(AMANECER)} className="button-filter">Amaneceres</button>
            <button onClick={() => setRooms(BOSQUES)} className="button-filter">Bosque</button>
            <button onClick={() => setRooms(ATARDECER)} className="button-filter">Atardecer</button>
        </div>
        <div className="container-photos">
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
                    rooms.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img className="img-slider" src={img}></img>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
}

export default Rooms;