import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Bodycard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>lapiceras </Card.Title>
                <Card.Text>
                 lapicera negra para el caballero lapicera roja para la dama 
                
                </Card.Text>
                <Button variant="primary">comprar </Button>
            </Card.Body>
        </Card>
    );
}

export default Bodycard;