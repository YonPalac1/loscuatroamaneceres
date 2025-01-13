import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ATARDECER, AMANECER, BOSQUES } from "../../contants";
import { Reveal } from "./Reveal";


const Rooms = ({ bullet, setVid, setImageView, setImageActive }) => {
    const [rooms, setRooms] = useState(AMANECER);
    const [active, setActive] = useState("am")

    const handleRooms = (selected, active, vid) => {
        setRooms(selected)
        setActive(active)
        setVid(vid)
    }

    const handleImage = (img) => {
        setImageView(img)
        setImageActive(true)
    }
    
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
            <button onClick={() => handleRooms(AMANECER, "am", 2)} className={`button-filter ${active === "am" ? "active" : ""}`}>Habitaciones Amaneceres</button>
            <button onClick={() => handleRooms(BOSQUES, "bo", 5)} className={`button-filter ${active === "bo" ? "active" : ""}`}>Habitaciones Bosques</button>
            <button onClick={() => handleRooms(ATARDECER, "at", 6)} className={`button-filter ${active === "at" ? "active" : ""}`}>Habitaciones Atardeceres</button>
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
                            <img className="img-slider" src={img} onClick={() => handleImage(img)}></img>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
}

export default Rooms;