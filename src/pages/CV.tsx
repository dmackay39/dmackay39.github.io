import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import Courses from '../components/Courses';
import ExampleProjects from '../components/ExampleProjects';
import WorkExperience from '../components/WorkExperience';

function CV () {
    return (
    <Container>
        <Row>
        <Col />
        <Col xs={7}>
        <Stack gap={2}>
        <h1>CV</h1>
        <p>
        <h4>Work Experience</h4>
        <WorkExperience />
        </p>
        <p>
        <h4>Education</h4>
            <div className="fw-bold">MPhys Physics (2:1) - University of St Andrews</div>
            <div>Final year project:</div>
            <ul><li>Convolutional Neural Networks for Scanning Tunneling Microscopy : <a href='https://github.com/dmackay39/ConvNet-Dissertation' target='_blank'>View Repo</a></li></ul>
            <div>Module Highlights:</div>
            <ul>
                <li>Advanced Data Analysis</li>
                <li>Complex Analysis</li>
                <li>Linear Algebra</li>
                <li>Multivariate and Vector Calculus</li>
            </ul>
        </p>
        <p>
        <h4>Example Projects</h4>
        <div>See the Software Projects dropdown for more!</div>
        <ExampleProjects />
        </p>
        <p>
        <h4>Certificates and Courses</h4>
        <Courses />
        </p>
        </Stack>
        </Col>
        <Col />
        </Row>
    </Container>
    )
}

export default CV;