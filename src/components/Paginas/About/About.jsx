import React from 'react';
import CarruselF from '../../Carrusel/Carrusel';
import './About.css';

const About = () => {
  return (
    <div>
      <CarruselF />
      <div className='ContenedorNosotros'>
        <h1 className='TituloNosotros'>Máquinas Ópticas</h1>
        <p className='MalditoTexto'>Máquinas Ópticas es una empresa dedicada a la comercialización de equipos e insumos para óptica.El inicio de sus actividades se remonta al año 1978, fecha en que de acuerdo a nuestros registros realizamos el primer servicio técnico en una máquina biseladora automática. En el año 1980, con el surgimiento de Máquinas Ópticas, primero en forma unipersonal y luego con la incorporación de varios colaboradores, nació formalmente nuestra firma.
          A principios del año 1997 comenzamos a brindar servicio técnico como representantes en Argentina de la firma Weco Optik-Maschinen. También en mayo del mismo año, lanzamos al mercado la biseladora diamantada Paraíso, de fabricación propia.
          En el año 2003 la firma Briot International decidió depositar en nosotros su confianza, otorgándonos la representación en el país para la venta y soporte técnico de sus equipos. Asimismo, la firma Rodenstock Instrumente, de gran prestigio en el ramo de la óptica y premiada en las exposiciones internacionales, nos confió la distribución de sus máquinas y equipos.
          En el presente brindamos asistencia a más de 1000 ópticas y talleres de calibrado en todo el país, tanto mediante la comercialización de equipos de calibrado, pequeñas herramientas e insumos, como así también a través de nuestro servicio técnico y asesoramiento permanente. Para ello contamos con personal profesional capacitado tanto aquí como en los países de origen y un completo stock de partes y repuestos.
          Disponemos, en la ciudad de Buenos Aires, de un salón de exposición y ventas donde se realizan habitualmente demostraciones de los equipos de calibrado, y un equipo de técnicos que brindan soporte en todo el territorio de la Argentina.</p>
      </div>
    </div>
  )
}

export default About;