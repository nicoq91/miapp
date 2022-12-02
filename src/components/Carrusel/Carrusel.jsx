import Carousel from 'react-bootstrap/Carousel';
import imagen1 from './carrusel1.png'
import imagen2 from './carrusel2.jpg'
import imagen3 from './carrusel3.jpg'

import './Carrusel.css';
function CarruselF() {
    return (
        <Carousel className='ContenedorCarrusel' variant="dark">
            <Carousel.Item >
                <img
                    className="Imagen1"
                    src={imagen1}
                    alt="primera imagen"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="Imagen2"
                    src={imagen2}
                    alt="segunda imagen"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="Imagen3"
                    src={imagen3}
                    alt="tercera imagen"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarruselF;