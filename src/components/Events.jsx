import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";

import icon from "../assets/icon.png";

const Events = ({ bullet }) => {
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

    return <section className="events section-2"
        id="eventos"
        style={{
            display: bullet === 2 ? "flex" : "none"
        }}
    >
        <div className="title">
            <Reveal delay={0.5}>
                <h2>Grilla de eventos</h2>
            </Reveal>
        </div>
        <div className="line"></div>
        <div className="grilla">
            <h3>Proximamente</h3>
        </div>
    </section>
}
export default Events;