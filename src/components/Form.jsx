const Form = () => {
    return <div className="form-container">
        <h2>¡Contactanos!</h2>
        <form>
            <label id="name">Nombre</label>
            <input placeholder="Nombre" name="name"></input>
            <label id="email">Email</label>
            <input placeholder="Correo Electrónico" name="email"></input>
            <label id="asunto">Asunto</label>
            <input placeholder="Asunto" name="asunto"></input>
            <label id="asunto">Mensaje</label>
            <textarea placeholder="Mensaje" name="asunto"></textarea>
            <button>Enviar</button>
        </form>
    </div>
}
export default Form;