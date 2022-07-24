import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
//import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
      <Container>
        <Navbar.Brand href="/">Blogg.app</Navbar.Brand>
        <Nav className="my-2">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
