import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Daniel MacKay</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cv">CV</Nav.Link>
            <Nav.Link href="/projects">Software Projects</Nav.Link>
            <NavDropdown title="Other Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/grandadssermons">Grandad's Sermons</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;