import React, { useState, useEffect, useContext, useRef } from 'react';

import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";
import vid5 from "../assets/vid5.mp4";
import vid6 from "../assets/vid6.mp4";
import vid7 from "../assets/vid7.mp4";

import { MyContext } from '../context/context';

import Section1 from '../components/Section1';
import Galery from '../components/Galery';
import Rooms from '../components/Rooms';
import Services from '../components/Services';
import Events from '../components/Events';
import Contact from '../components/Contact';

import Container from '../components/Container';
import ImageViewer from '../components/ImageViewer';

const Home = () => {
    const { bullet, setBullet, setHeight, vid, setVid, imageView, imageActive, setImageView, setImageActive } = useContext(MyContext);
    const secciones = [
        <Section1 bullet={bullet} setBullet={setBullet} />,
        <Galery bullet={bullet} setBullet={setBullet} setImageView={setImageView} setImageActive={setImageActive} />,
        <Rooms bullet={bullet} setBullet={setBullet} vid={vid} setVid={setVid} setImageView={setImageView} setImageActive={setImageActive} />,
        <Services bullet={bullet} setBullet={setBullet} />,
        <Events bullet={bullet} setBullet={setBullet} />,
        <Contact bullet={bullet} setBullet={setBullet} />
    ];
    const [images] = useState([vid1, vid2, vid3, vid4, vid5, vid6, vid7]);
    const heightRef = useRef(null);

    useEffect(() => {
        setHeight(heightRef.current.offsetHeight)
    }, [heightRef, bullet, imageView])

    return (
        <Container bullet={bullet}>
            {
                images?.map((img, i) => (
                    <video autoPlay loop muted
                        style={{
                            opacity: i === vid ? 1 : 0
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
            {
                imageActive && <ImageViewer image={imageView} setImageActive={setImageActive} />
            }
        </Container >
    );
};

export default Home;