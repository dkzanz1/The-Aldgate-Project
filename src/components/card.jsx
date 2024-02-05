import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function CreateCard() {
    return<>
        <Container>
            <Row>
                <Col lg={4} md={6} className="mb-4 mt-30">
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>The title</Card.Title>
                            <Card.Text>
                            A quick example some text
                            </Card.Text>
                            <Card.Link>Card Link</Card.Link>
                            <Card.Link>Another Card Link</Card.Link>
                            <Button variant='primary'> go somewhere</Button>
                        </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </>
}
export default CreateCard;