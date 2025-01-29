import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ENCUENTROS } from "../../contants";
import { Reveal } from "./Reveal";


const Encuentros = ({ bullet, setVid, setImageView, setImageActive }) => {
    const [active, setActive] = useState("am")

    const handleImage = (img) => {
        setImageView(img)
        setImageActive(true)
    }

    return <section className="rooms section-2"
        id="espacios"
        style={{
            display: bullet === 3 ? "flex" : "none"
        }}
    >
        <div className="title">
            <Reveal delay={0.5}>
                <h2>ENCUENTROS & RETIROS</h2>
            </Reveal>
            <Reveal delay={1}>
                <p>La Verdadera Belleza y el auténtico bienestar provienen de un lugar profundamente arraigado en nuestro interior que se manifiesta cuando cuerpo, mente y espíritu están en armonía.</p>
            </Reveal>
        </div>
        <div className="container-photos">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                pagination={{ clickable: true }}
                slidesPerView={4}
                breakpoints={{
                    300: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },

                    382: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    400: {
                        slidesPerView: 1.5,
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
                    ENCUENTROS?.map((img, i) => (
                        <SwiperSlide key={i}>
                            <Reveal>

                                <img className="img-slider" src={img} onClick={() => handleImage(img)}></img>
                            </Reveal>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
}

export default Encuentros;