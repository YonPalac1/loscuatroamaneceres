import { useEffect, useState } from "react";

const Grilla = ({ eventos, mesBuscado, calendar }) => {
    const [events, setEvents] = useState(eventos)
    useEffect(() => {
        const mesesFiltrados = calendar.filter((evento) => {
            return evento.mes.toLocaleLowerCase().includes(mesBuscado)
        })
        setEvents(mesesFiltrados)
        console.log(events)
    }, [eventos, mesBuscado])

    return <div className="grilla">
        {
            events.length === 0 ?
                <div className="evento">
                    <p>No hay eventos para este mes</p>
                </div>
            : events?.map((item, i) => (
                <div className="evento" key={i}>
                    <span></span>
                    <p>{item.fecha} | {item.mes}</p>
                    <h4>{item.evento}</h4>
                </div>
            ))
        }
    </div>
}
export default Grilla;