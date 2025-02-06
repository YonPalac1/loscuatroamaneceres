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
import Loading from '../components/Loading';
import Encuentros from '../components/Encuentros';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const { bullet, setBullet, setHeight, vid, setVid, imageView, imageActive, setImageView, setImageActive } = useContext(MyContext);

    const secciones = [
        <Section1 bullet={bullet} setBullet={setBullet} n={0} />,
        <Galery bullet={bullet} setBullet={setBullet} setImageView={setImageView} setImageActive={setImageActive} n={1}/>,
        <Rooms bullet={bullet} setBullet={setBullet} vid={vid} setVid={setVid} setImageView={setImageView} setImageActive={setImageActive} n={2}/>,
        <Encuentros bullet={bullet} setBullet={setBullet} vid={vid} setVid={setVid} setImageView={setImageView} setImageActive={setImageActive} n={3}/>,
        <Services bullet={bullet} setBullet={setBullet} n={4}/>,
        // <Events bullet={bullet} setBullet={setBullet} n={5} />,
        <Contact bullet={bullet} setBullet={setBullet} n={6}/>
    ];

    const [images] = useState([vid1, vid2, vid2, vid3, vid4, vid5, vid6, vid7]);
    const heightRef = useRef(null);

    useEffect(() => {
        const loadContent = async () => {
            await new Promise(resolve => setTimeout(resolve, 5000));
            setLoading(false);
        };
        loadContent();
    }, []);

    useEffect(() => {
        setHeight(heightRef?.current.offsetHeight);
    }, [heightRef, bullet, imageView]);

    return (
        <Container bullet={bullet} >
            {loading ? (
                <div ref={heightRef}>
                    <Loading />
                </div>
            ) : (
                <>
                    {images?.map((img, i) => (
                        <video autoPlay loop muted style={{ display: i === vid ? "block" : "none" }} className='images-bg' key={i} >
                            <source src={img} type="video/mp4"></source>
                        </video>
                    ))}
                    {secciones.map((Seccion, index) => (
                        <div key={index} className="seccion" ref={heightRef}>
                            {Seccion}
                        </div>
                    ))}
                    {imageActive && <ImageViewer image={imageView} setImageActive={setImageActive} />}
                </>
            )}
        </Container>
    );
};

export default Home;