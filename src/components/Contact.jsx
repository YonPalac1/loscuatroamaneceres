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
            <div className='info'>
                <Reveal delay={0.5}>
                    <h3>¡Escribinos!</h3>
                    <p>Por consultas y/o pedidos de cotización contactanos y nuestro equipo de Reservas estarán a su disposición para brindarle información.
                    </p>
                    {/* <ul>
                        <li><span>Email:</span> Info@loscuatroamaneceres.com.ar</li>
                        <li><span>WhatsApp:</span> 115959-7773</li>
                        <li><span>Teléfono:</span> 114973-4305</li>
                    </ul> */}
                    <Form />
                </Reveal>
            </div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6561.738486112143!2d-59.31390899999998!3d-34.709256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc6fa32f8cad3d%3A0x3c85485aa0909dbd!2sLos%20Cuatro%20Amaneceres%20Hotel%20de%20campo%20y%20eventos!5e0!3m2!1ses-419!2sus!4v1736533983041!5m2!1ses-419!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
}

export default Contact;