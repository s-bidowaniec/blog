import { useParams, Navigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { Stack, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../redux/postsRedux';
import DelModal from '../../common/DelModal/DelModal';

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => dispatch(deletePost({ id }));
  if (!post) return <Navigate to="/" />;
  else
    return (
      <Container className={'py-3'}>
        <DelModal show={show} handleClose={handleClose} handleDelete={handleDelete}></DelModal>
        <Row className="justify-content-md-center">
          <Col md={12} xl={8}>
            <Stack direction="horizontal" gap={3}>
              <h1 className="me-auto">{post.title}</h1>
              <Button variant="outline-info">
                <Nav.Link as={NavLink} to={'/post/edit/' + post.id}>
                  Edit
                </Nav.Link>
              </Button>
              <Button variant="outline-danger" onClick={handleShow}>
                Delete
              </Button>
            </Stack>
            <p>
              <strong>Author:</strong> {post.author}
              <br />
              <strong>Date:</strong> {post.publishedDate}
              <br />
            </p>
            <p>{post.content}</p>
          </Col>
        </Row>
      </Container>
    );
};

export default Post;
