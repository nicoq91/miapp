import React from 'react';
import "./Contactos.css"
import ContactForm from './Formulario';


const Contactos = () => {
  return (
    <div className='ContenedorContactos'>
      <div className='ContenedorDejanos' >
        <h3 >Dejanos tu consulta</h3>
      </div>
      <ContactForm />
    </div>

  )
}

export default Contactos; 