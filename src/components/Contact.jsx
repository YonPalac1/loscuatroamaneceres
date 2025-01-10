import { Reveal } from './Reveal';
import Form from './Form';

import arrow from "../assets/arrow.png";

const Contact = ({ bullet }) => {
    return <section className='contact section-5'
        id="contacto"
        style={{
            display: bullet === 5 ? "flex" : "none"
        }}>
        <div className='title'>
            <Reveal delay={0.5}>
                <h2>¡Contactanos!</h2>
            </Reveal>
        </div>
        <div className='line'></div>
        <div className='info-container'>
            <Reveal delay={0.5}>
                <div className='info'>
                    <p>Por consultas y/o pedidos de cotización contactanos y nuestro equipo de Reservas estarán a su disposición para brindarle información.
                    </p>
                    <ul>
                        <li><span>Email:</span> Info@loscuatroamaneceres.com.ar</li>
                        <li><span>WhatsApp:</span> 115959-7773</li>
                        <li><span>Teléfono:</span> 114973-4305</li>
                    </ul>
                </div>
            </Reveal>
            <Form />
        </div>
    </section>
}

export default Contact;