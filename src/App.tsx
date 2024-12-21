import './App.css'
import { ReactNode } from 'react';
import Header from './components/Header';
import { Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';

interface AppProps {
  children: ReactNode;
}

function App(props : AppProps) {

  const {children} = props;

  return (
      <Container fluid className="d-flex flex-column min-vh-100">
        <Row>
          <Header />
        </Row>
        <Row className='flex-grow-1'>
          {children}
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
  )
}

export default App
