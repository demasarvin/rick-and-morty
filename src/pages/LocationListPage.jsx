
import { Container, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LocationListPage = () => {
    const keys = Object.keys(localStorage);
    return (
        <Container>
            <Row className="mt-4">
                <Col >
                    {keys.map((key, index) => (
                        <Link
                            to={`/location/${key}`} 
                            key={index} 
                            className="list-group-item list-group-item-action mb-3"
                        >
                            <Card>
                                <Card.Body>
                                    <Card.Title>{key}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default LocationListPage;
