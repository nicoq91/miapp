import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Productos.css";
import imagen1 from './imagenes/imagen1.png';
import imagen2 from './imagenes/imagen2.jpg';
import imagen3 from './imagenes/imagen3.jpg';
import imagen4 from './imagenes/imagen4.jpg';
import imagen5 from './imagenes/imagen5.png';
import imagen6 from './imagenes/imagen6.jpg';
import { Link } from 'react-router-dom';
const Productos = () => {
    return (
        <>
            <div className='contenedorH1'>
                <h1>PRODUCTOS</h1>
            </div>
            <div className='contenedorProductos'>
                {/* comentario 1er producto*/}
                <Card className='caja' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen1} />
                    <Card.Body>
                        <Card.Title>Lensometros </Card.Title>
                        <Card.Text>
                            {/* Caja 1 */}
                        </Card.Text>
                        {/* aca deberia color el a href o el link para vincular el boton info  */}
                        <Button variant="primary" as={Link} to="/Lensometros" >+ info </Button>
                    </Card.Body>
                </Card>

                {/* comentario 2do producto*/}
                <Card className='caja' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen2} />
                    <Card.Body>
                        <Card.Title>Biseladoras </Card.Title>
                        <Card.Text>
                            caja 2
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/Lensometros">+ info </Button>
                    </Card.Body>
                </Card>
                {/* comentario 3er producto*/}
                <Card className='caja' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen3} />
                    <Card.Body>
                        <Card.Title>Scanners </Card.Title>
                        <Card.Text>
                            caja 3
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/Lensometros">+ info </Button>
                    </Card.Body>
                </Card>
                {/* comentario 4to producto*/}
                <Card className='caja' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen4} />
                    <Card.Body>
                        <Card.Title>Centradores </Card.Title>
                        <Card.Text>
                            caja 4
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/Lensometros">+ info </Button>
                    </Card.Body>
                </Card>
                {/* comentario 5to producto*/}
                <Card className='caja' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen5} />
                    <Card.Body>
                        <Card.Title>software </Card.Title>
                        <Card.Text>
                            caja 5
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/Lensometros">+ info </Button>
                    </Card.Body>
                </Card>
                {/* comentario 6tor producto*/}
                <Card className='caja' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen6} />
                    <Card.Body>
                        <Card.Title>Accesorios y Respuestos </Card.Title>
                        <Card.Text>
                            caja 6
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/Lensometros">+ info </Button>
                    </Card.Body>
                </Card>


            </div>
        </>
    )
}

export default Productos;