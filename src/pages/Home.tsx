import { Container, Row, Col } from "react-bootstrap";

function Home(){
    return (
        <Container>
        <Row>
        <Col />
        <Col xs={7}>
        <p>
        <h1>Intro</h1>
        <p>Hi! I am a full-stack software engineer.</p>
        <p>I often create github repos as reference projects as I learn new technologies. Feel free to have a look!</p>
        <p>Some of my professional interests are: </p>
        <ul>
            <li>Rest APIs with Java and Python</li>
            <li>React Web Apps</li>
            <li>Machine Learning techniques</li>
            <li>Generative AI</li>
            <li>Mathematical Financial Models</li>
            <li>Quantum Computing</li>
        </ul>
        <p>So on this site you may see projects and posts related to the above!</p>
        </p>
        </Col>
        <Col />
        </Row>
        </Container>
    )
}

export default Home;