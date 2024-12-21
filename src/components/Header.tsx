import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Daniel MacKay</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className='custom-link'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/cv" className='custom-link'>CV</Link></Nav.Link>
            <Nav.Link><Link to="/projects" className='custom-link'>Projects</Link></Nav.Link>
            <NavDropdown title="Other Projects" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/grandadssermons" className='custom-link'>Grandad's Sermons</Link>
            </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;