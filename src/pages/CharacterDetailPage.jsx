import { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Form, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetailPage = () => {
    const [character, setCharacter] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const { characterId } = useParams();
    const [assignedLocation, setAssignedLocation] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
                setCharacter(response.data);
            } catch (error) {
                console.error('Error fetching selected character:', error);
            }
            
        };
        if (characterId) {
            fetchData();
        }
    }, [characterId]);

    const handleChange = (e) => {
        const { value } = e.target;
        setAssignedLocation(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!assignedLocation) {
            setAlertContent('Please enter a location.');
            setShowAlert(true);
            return;
        }

        const allLocations = Object.keys(localStorage);
        for (const location of allLocations) {
            const locationData = JSON.parse(localStorage.getItem(location));
            if (locationData && locationData.characters) {
                const isCharacterAssigned = locationData.characters.some(char => char.id === character.id);
                if (isCharacterAssigned) {
                    setAlertContent('Character is already assigned to location.');
                    setShowAlert(true);
                    setAssignedLocation('');
                    return;
                }
            }
        }

        const newCharacterData = {
            ...character,
            assignedLocation: assignedLocation
        };
    
        const existingLocationData = JSON.parse(localStorage.getItem(assignedLocation)) || { characters: [] };
        existingLocationData.characters.push(newCharacterData);
        
        try {
            localStorage.setItem(assignedLocation, JSON.stringify(existingLocationData));
            setAssignedLocation('');
            setAlertContent('Character assigned successfully!');
            setShowAlert(true);
        } catch (error) {
            console.error('Error assigning location:', error);
            setAlertContent('Failed to assign location. Please try again.');
            setShowAlert(true);
        }
    };

    return (
        <Container fluid>
            {character !== null && (
                <Row className="d-flex mt-3 justify-content-center">
                <Col xs={12} md={3} className="d-flex flex-column mb-4">
                    <Image variant="top" src={character.image} />
                    <h2 className='text-center'>{character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <p>Gender: {character.gender}</p>
                    <h4 className='mt-3'>Assign Location</h4>
                    {showAlert && 
                        <Alert variant="secondary" onClose={() => setShowAlert(false)} dismissible>
                            {alertContent}
                        </Alert>
                    }
                    <Form onSubmit={handleSubmit}>
                    <Form.Label htmlFor="inputLocation">Location</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputLocation"
                            value={assignedLocation} 
                            onChange={handleChange}
                            required
                        />
                        <Button type="submit" variant="primary" className='mt-3'>
                            Assign Location
                        </Button>
                    </Form>
                </Col>
              </Row>
            )}
        </Container>
      );
}
export default CharacterDetailPage;
