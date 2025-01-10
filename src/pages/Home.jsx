import React, { useState, useEffect, useContext, useRef } from 'react';

import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import video3 from "../assets/video3.mp4"

import { MyContext } from '../context/context';

import Section1 from '../components/Section1';
import Galery from '../components/Galery';
import Rooms from '../components/Rooms';
import Services from '../components/Services';
import Events from '../components/Events';
import Contact from '../components/Contact';

import Container from '../components/Container';

const Home = () => {
    const { bullet, setHeight } = useContext(MyContext);
    const secciones = [
        <Section1 bullet={bullet} />,
        <Galery bullet={bullet} />,
        <Rooms bullet={bullet} />,
        <Services bullet={bullet} />,
        <Events bullet={bullet} />,
        <Contact bullet={bullet} />
    ];
    const [images] = useState([video1, video2, video3, video1, video2, video3]);
    const heightRef = useRef(null);

    useEffect(() => {
        setHeight(heightRef.current.offsetHeight)
    }, [heightRef, bullet])

    return (
        <Container bullet={bullet}>
            {
                images?.map((img, i) => (
                    <video autoPlay loop muted
                        style={{
                            opacity: i === bullet ? 1 : 0
                        }}
                        className='images-bg'
                        key={i}
                    >
                        <source src={img} type="video/mp4"></source>
                    </video>
                ))

            }
            {
                secciones.map((Seccion, index) => (
                    <div key={index} className="seccion" ref={heightRef}>
                        {Seccion}
                    </div>
                ))
            }
        </Container >
    );
};

export default Home;