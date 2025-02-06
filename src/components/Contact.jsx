import { Reveal } from './Reveal';
import Form from './Form';
import icon from "../assets/icon.png";

const Contact = ({ bullet, n }) => {
    return <section className='contact section-6'
        id="contacto"
        style={{
            display: bullet === n ? "flex" : "none"
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
                    <Form />
                </Reveal>
            </div>
            <div className='map'>
                {/* <ul>
                        <li><span>Email:</span> Info@loscuatroamaneceres.com.ar</li>
                        <li><span>WhatsApp:</span> 115959-7773</li>
                        <li><span>Teléfono:</span> 114973-4305</li>
                    </ul> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6561.738486112143!2d-59.31390899999998!3d-34.709256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc6fa32f8cad3d%3A0x3c85485aa0909dbd!2sLos%20Cuatro%20Amaneceres%20Hotel%20de%20campo%20y%20eventos!5e0!3m2!1ses-419!2sus!4v1736533983041!5m2!1ses-419!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <footer>
            <div className='info'>
                <span>información</span>
                <p>Los cuatro amaneceres es un complejo dedicado a brindar servicio de Hoteleria para Retiros, Cursos y Seminarios. Ubicado a 90km de CABA, en la localidad de Tomas Jofré, partido de Mercedes.</p>
            </div>
            <img src={icon} alt="los cuatro amaneceres"></img>
            <div className='social'>
                <span>redes sociales</span>
                <a href="https://www.instagram.com/loscuatroamaneceres.campo/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="black" />
                    </svg>
                </a>
                <a href="https://wa.me/1159597773">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="black" />
                    </svg>
                </a>
            </div>
        </footer>
    </section>
}

export default Contact;