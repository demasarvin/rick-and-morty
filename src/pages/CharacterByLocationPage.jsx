import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/Card';

const CharacterByLocationPage = () => {
    const { locationName } = useParams();
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        const characterData = JSON.parse(localStorage.getItem(locationName));
        if (locationName) {
            setCharacters(characterData.characters || []);
        } else {
            setCharacters([]);
        }
    }, [locationName]);
    return (
        <Container>
            <h1 className="mt-4">Characters in {locationName}</h1>
            <Row>
                {characters.length > 0 ? (
                    characters.map((character, index) => {
                        return (
                            <CharacterCard key={character.id} character={character} />
                        );
                    })
                ) : (
                    <p>No characters found in this location.</p>
                )}
            </Row>
        </Container>
    );
}

export default CharacterByLocationPage;