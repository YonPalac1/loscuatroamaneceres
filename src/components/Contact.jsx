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
                <h2>Los cuatro amaneceres</h2>
            </Reveal>
        </div>
        <Reveal delay={0.8}>
            <div className='info'>
                <div>
                    <h3>Explora y descubre</h3>
                </div>
                <div className='description'>
                    <p>Los Cuatro Amaneceres es un complejo de 27 hectáreas rodeadas de bosque  ubicado en el tradicional pueblo Tomás Jofré, Partido de Mercedes,  Buenos Aires. A tan solo 94Km de CABA. Es un lugar para descansar y  conectar con la naturaleza.</p>
                </div>

            </div>
        </Reveal>
        <div className='line'></div>
        <Reveal delay={1}>
            <div className='info'>
                <div>
                    <h3>Datos de contacto</h3>
                </div>
                <div className='description'>
                    <ul>
                        <li>Dirección: RP N° 42,6600 Mercedes, Tomas Jofré, Bs. As.</li>
                        <li>Teléfono: 114973 4305</li>
                        <li>WhatsApp: 115959-7773</li>
                        <li>E-mail: info@loscuatroamaneceres.com.ar</li>
                    </ul>
                </div>
            </div>
        </Reveal>
        <div className='reserve'>
            <span>Reserva</span>
            <img src={arrow} alt=""></img>
        </div>

        <Form />
    </section>
}

export default Contact;