import { useState, useRef } from "react";
import { Reveal } from "./Reveal";

const Services = ({ bullet }) => {
    const contentEl = useRef();
    const [active, setActive] = useState(null);
    const items = [{
        title: "Habitaciones",
        description: "Sector Campo: 10 Habitaciones cuádruples. Sector Bosque: 8 Habitaciones triples. Sector Piscina: 5 habitaciones cuádruples. Sector Spa: 5 Habitaciones triples/cuádruples. (Todas con baños privados, aire acondicionado y calefacción)."
    }, {
        title: "Pension completa",
        description: "Sector Campo: 10 Habitaciones cuádruples. Sector Bosque: 8 Habitaciones triples. Sector Piscina: 5 habitaciones cuádruples. Sector Spa: 5 Habitaciones triples/cuádruples. (Todas con baños privados, aire acondicionado y calefacción)."
    }, {
        title: "Piscina exterior",
        description: "Sector Campo: 10 Habitaciones cuádruples. Sector Bosque: 8 Habitaciones triples. Sector Piscina: 5 habitaciones cuádruples. Sector Spa: 5 Habitaciones triples/cuádruples. (Todas con baños privados, aire acondicionado y calefacción)."
    }, {
        title: "Salones para actividades",
        description: "Sector Campo: 10 Habitaciones cuádruples. Sector Bosque: 8 Habitaciones triples. Sector Piscina: 5 habitaciones cuádruples. Sector Spa: 5 Habitaciones triples/cuádruples. (Todas con baños privados, aire acondicionado y calefacción)."
    }]

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return <section className='services section-3'
        id="servicios"
        style={{
            display: bullet === 3 ? "flex" : "none"
        }}>
        <div className='title'>
            <Reveal delay={0.5}>
                <h2>Servicios</h2>
            </Reveal>
            <Reveal delay={1}>
                <div className='semi-circle'></div>
            </Reveal>
        </div>
        <div className='descriptions'>
            {
                items.map((item, index) => (
                    <Reveal delay={index} key={index}>
                        <div className='item'>
                            <h3 className='active' onClick={() => handleToggle(index)}>{item.title}</h3>
                            <div
                                className={`collapse ${active === index ? "show" : ""}`}
                                ref={contentEl} style={
                                    active === index
                                        ? { height: contentEl.current.scrollHeight + 20 }
                                        : { height: "0px" }
                                }>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </Reveal>
                ))
            }
        </div>
    </section>
}

export default Services;