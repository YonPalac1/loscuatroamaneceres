import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { CALENDAR, MONTHS } from "../../contants";
import Grilla from "./Grilla";

const Events = ({ bullet }) => {
    const [eventoBuscado, setEventoBuscado] = useState('');
    const [mesBuscado, setMesBuscado] = useState('');
    const [eventos, setEventos] = useState(CALENDAR);

    const handleBuscarEvento = (e) => {
        const textoBuscado = e.target.value.toLowerCase();
        setEventoBuscado(textoBuscado);

        if (textoBuscado === "") {
            setEventos(CALENDAR)
        } else {
            const eventosFiltrados = CALENDAR.filter((evento) => {
                return evento.evento.toLocaleLowerCase().includes(eventoBuscado)
            })
            setEventos(eventosFiltrados)
        }
    };

    const handleBuscarMes = (e) => {
        const mesFiltrado = e.target.value.toLowerCase();
        setEventoBuscado("")
        setMesBuscado(mesFiltrado);

        

    }

    return <section className="events section-4"
        id="eventos"
        style={{
            display: bullet === 4 ? "flex" : "none"
        }}
    >
        <div className="title">
            <Reveal delay={0.5}>
                <h2>Eventos</h2>
            </Reveal>
        </div>
        <div className="line"></div>
        <div className="filters">
            <input
                type="text"
                value={eventoBuscado}
                onChange={handleBuscarEvento}
                placeholder="Buscar evento"
            />

            <select value={mesBuscado} onChange={handleBuscarMes}>
                <option value="">Todos los meses</option>
                {MONTHS.map((mes, i) => (
                    <option key={i} value={mes}>
                        {mes}
                    </option>
                ))}
            </select>
        </div>
        <Grilla eventos={eventos} mesBuscado={mesBuscado} setEventos={setEventos} calendar={CALENDAR} />
    </section>
}
export default Events;