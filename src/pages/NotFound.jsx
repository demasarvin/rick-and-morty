import { Container, Row, Col } from 'react-bootstrap';

const PageNotFound = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="mt-5">404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
