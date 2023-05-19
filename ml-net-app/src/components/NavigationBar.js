import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';

function Navigationbar() {

  return (
    <Navbar className='color-nav py-3' expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand className='navbar-brand'>CareerAI</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
