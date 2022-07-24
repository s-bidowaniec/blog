import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
//import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Container>
      <Navbar bg="primary" variant="dark" className="rounded">
        <Navbar.Brand className="me-auto px-2">
          <Nav.Link as={NavLink} to="/">
            Blog.app
          </Nav.Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavBar;
