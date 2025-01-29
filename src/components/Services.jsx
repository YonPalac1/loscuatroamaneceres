import { useState, useRef } from "react";
import { Reveal } from "./Reveal";
import { SERVICES } from "../../contants";


const Services = ({ bullet }) => {
    const contentEl = useRef();
    const [active, setActive] = useState(null);

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
            display: bullet === 4 ? "flex" : "none"
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
                SERVICES.map((item, index) => (
                    <Reveal delay={index} key={index}>
                        <div className='item'>
                            <h3 className='active' onClick={() => handleToggle(index)}>{item.title}</h3>
                            <div
                                className={`collapse ${active === index ? "show" : ""}`}
                                ref={contentEl} style={
                                    active === index
                                        ? { height: contentEl.current.scrollHeight + 30 }
                                        : { height: "0px" }
                                }>
                                <ul>
                                    {item.description.map((list, i) => (
                                        <li key={i}>- {list}</li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </Reveal>
                ))
            }
        </div>
    </section>
}

export default Services;