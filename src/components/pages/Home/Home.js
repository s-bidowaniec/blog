import { Button, Container, Nav, Stack } from 'react-bootstrap';
import Posts from '../../featuers/Posts/Posts';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Stack direction="horizontal" gap={2}>
        <h2 className={'me-auto'}>All posts</h2>
        <Button className="my-2" variant="outline-info">
          <Nav.Link as={NavLink} to="/post/add">
            Add Post
          </Nav.Link>
        </Button>
      </Stack>
      <Posts />
    </Container>
  );
};

export default Home;
