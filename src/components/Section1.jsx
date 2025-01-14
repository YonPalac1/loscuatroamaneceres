import { useState, useEffect } from "react";
import { Reveal } from '../components/Reveal';
import wave from '../assets/wave.png';

const Section1 = ({ bullet, setBullet }) => {
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
        id="home"
        style={{
            display: bullet === 0 ? "flex" : "none"
        }}>
        <div className="title">
            <Reveal delay={3.5}>
                <div className="circle"
                    style={{
                        transform: `translate(${paralaxPosition.x}px, ${paralaxPosition.y}px)`,
                        transition: 'transform 0.1s ease-out',
                    }}></div>
            </Reveal>
            <div className='text-wave'>
                <Reveal delay={2.5}>
                    <h2>Los cuatro amaneceres</h2>
                </Reveal>
                <Reveal delay={3}>
                    <p>Complejo dedicado a brindar servicio de Hoteleria para Retiros, Cursos y Seminarios</p>
                </Reveal>
                <img src={wave} alt=""></img>
            </div>

        </div>
        {/* <a href=""><h1>Los cuatro amaneceres</h1></a> */}

        <div className='subtitle'>
            <Reveal delay={3.8}>
                <p>Ubicado a 90km de CABA, en la localidad de Tomas Jofré, partido de Mercedes. </p>
            </Reveal>
        </div>
        <div className="discover" onClick={() => setBullet(1)}>
            <Reveal delay={3.5}>
                <h3>Descubre</h3>
            </Reveal>
        </div>
    </section >
}

export default Section1;