import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Row, Card } from 'react-bootstrap';
import Courses from '../components/Courses';
import ExampleProjects from '../components/ExampleProjects';
import WorkExperience from '../components/WorkExperience';
import { BsBriefcase, BsMortarboard, BsCodeSlash, BsPatchCheck } from 'react-icons/bs';

function CV () {
    return (
        <Container>
            <Row>
                <Col />
                <Col xs={12} md={8} lg={7}>
                    <Stack gap={4} className="my-5">
                        <h1 className="mb-4 text-center fw-bold">CV</h1>

                        <Card className="shadow-sm border-primary bg-light">
                            <Card.Body>
                                <Card.Title className="mb-3">
                                    <BsBriefcase className="me-2 text-primary" />
                                    Work Experience
                                </Card.Title>
                                <WorkExperience />
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm border-success bg-light">
                            <Card.Body>
                                <Card.Title className="mb-3">
                                    <BsMortarboard className="me-2 text-success" />
                                    Education
                                </Card.Title>
                                <div className="fw-bold">MPhys Physics (2:1) - University of St Andrews</div>
                                <div className="mt-2">Final year project:</div>
                                <ul>
                                    <li>
                                        Convolutional Neural Networks for Scanning Tunneling Microscopy:{' '}
                                        <a href='https://github.com/dmackay39/ConvNet-Dissertation' target='_blank' rel="noopener noreferrer">
                                            View Repo
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-2">Module Highlights:</div>
                                <ul>
                                    <li>Advanced Data Analysis</li>
                                    <li>Complex Analysis</li>
                                    <li>Linear Algebra</li>
                                    <li>Multivariate and Vector Calculus</li>
                                </ul>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm border-info bg-light">
                            <Card.Body>
                                <Card.Title className="mb-3">
                                    <BsCodeSlash className="me-2 text-info" />
                                    Example Projects
                                </Card.Title>
                                <div>See the Software Projects dropdown for more!</div>
                                <ExampleProjects />
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm border-warning bg-light">
                            <Card.Body>
                                <Card.Title className="mb-3">
                                    <BsPatchCheck className="me-2 text-warning" />
                                    Certificates and Courses
                                </Card.Title>
                                <Courses />
                            </Card.Body>
                        </Card>
                    </Stack>
                </Col>
                <Col />
            </Row>
        </Container>
    );
}

export default CV;