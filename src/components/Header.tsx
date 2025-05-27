import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" variant="dark" expand="md" fixed='top'>
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold">
                    Daniel MacKay
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" end>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/cv">
                            CV
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/projects">
                            Projects
                        </Nav.Link>
                        <NavDropdown title="Other Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/grandadssermons">
                                Grandad's Sermons
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;