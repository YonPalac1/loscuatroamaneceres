const Grilla = ({ eventos }) => {

    return <div className="grilla">
        {
            eventos.length === 0 ?
                <div className="evento">
                    <p>No hay eventos para este mes</p>
                </div>
            : eventos?.map((item, i) => (
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