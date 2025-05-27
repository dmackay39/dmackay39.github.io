import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={7}>
                    <Card className="shadow-sm my-5 bg-light border-0">
                        <Card.Body>
                            <h1 className="mb-4 fw-bold text-center">Intro</h1>
                            <p>Hi! I am a full-stack software engineer.</p>
                            <p>
                                I often create GitHub repos as reference projects as I learn new technologies.
                                Feel free to have a look!
                            </p>
                            <p>Some of my professional interests are:</p>
                            <ul>
                                <li>REST APIs with Java and Python</li>
                                <li>React Web Apps</li>
                                <li>Machine Learning </li>
                                <li>Generative AI</li>
                                <li>Mathematical Models</li>
                                <li>Quantum Computing</li>
                            </ul>
                            <p>
                                So on this site you may see projects and posts related to the above!
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;