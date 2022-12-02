import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Formulario.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("xvoyzvow");
    if (state.succeeded) {
        return <h3><p>Gracias por dejarnos tu mensaje nuestros asesores se pondran en contacto </p></h3>;
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='formulario1'>
                <label htmlFor="email" >
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='ingresa tu correo '
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="nombre" >
                    Nombre:
                </label>
                <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    placeholder='ingresa tu nombre  '
                />
                <ValidationError
                    prefix="Text"
                    field="nombre"
                    errors={state.errors}
                />
                <label htmlFor="Apellido" >
                    Apellido:
                </label>
                <input
                    id="Apellido"
                    type="text"
                    name="Apellido"
                    placeholder=' Ingresa tu Apellido  '
                />
                <ValidationError
                    prefix="Text"
                    field="Apellido"
                    errors={state.errors}
                />
                <textarea
                    
                    id="message"
                    name="message"
                    placeholder=' Dejanos tu mensaje o consulta'
                    
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Enviar
                </button>
            </form>
        </div>
    );
}
export default ContactForm;