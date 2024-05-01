import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

const CharacterCard = ({ character }) => {
    return (
        <Col md={3} className="mb-3">
            <Link to={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
                <Card>
                    <Card.Img variant="top" src={character.image} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default CharacterCard;