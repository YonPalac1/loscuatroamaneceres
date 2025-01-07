import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [send, setSend] = useState('');
    const [status, setStatus] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Aguarde un momento...")
        const response = await fetch("/contact", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message }),
        });
        const data = await response.json();
        setStatus('')
        setSend(data.message)
    };

    return <div className="form-container">
        <h2>¡Contactanos!</h2>
        <form onSubmit={handleSubmit}>
            <label type="text" value={name} onChange={(e) => setName(e.target.value)} id="name">Nombre</label>
            <input placeholder="Nombre" name="name"></input>
            <label id="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo Electrónico" name="email"></input>
            <label id="asunto">Asunto</label>
            <input placeholder="Asunto" name="asunto"></input>
            <label id="asunto">Mensaje</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensaje" name="asunto"></textarea>
            <span className="alert-message">{ status }</span>
            <span className="alert-message">{ send }</span>
            <button type="submit">Enviar</button>
        </form>
    </div>
}
export default Form;