import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CharacterCard from '../components/Card';
import MyPagination from '../components/Pagination';
import axios from 'axios';

const CharactersListPage = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
            setCharacters(response.data.results);
            setTotalPages(response.data.info.pages);
          } catch (error) {
            console.error('Error fetching characters:', error);
          } 
        };
    
        fetchData();
    }, [currentPage]);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <Container>
            <h2 className="d-flex justify-content-center my-3">Characters Rick and Morty</h2>
            <Row>
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </Row>
            <div className="d-flex justify-content-center my-3">
                <MyPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                    goToFirstPage={goToFirstPage}
                    goToLastPage={goToLastPage}
                /> 
            </div>
        </Container>
    );
}

export default CharactersListPage;
