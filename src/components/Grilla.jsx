import { useEffect } from "react";

const Grilla = ({ eventos, mesBuscado, setEventos, calendar }) => {

    useEffect(() => {
        const mesesFiltrados = calendar.filter((evento) => {
            return evento.mes.toLocaleLowerCase().includes(mesBuscado)
        })
        setEventos(mesesFiltrados)
    }, [eventos, mesBuscado])

    return <div className="grilla">
        {
            eventos?.map((item, i) => (
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