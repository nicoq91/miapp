import React from 'react'
import SitioEnConstruccion from '../Lensometros/SitioWebEnConstruccion.gif'
import './Lensometros.css'

const Lensometros = () => {
  return (
    <div>
             <div >       
            <h1 className='PaginaEnConstruccion'>PAGINA EN CONSTRUCCION </h1>
         <img src={SitioEnConstruccion} alt='sitio-en-construccion' className='ImagenConstruccion'/>
        </div>
    </div>
  )
}

export default Lensometros;