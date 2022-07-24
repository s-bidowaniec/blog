import { Col, Container, Row, Stack } from 'react-bootstrap';
import AddPostForm from '../../featuers/AddPostForm/AddPostForm';

const PostAdd = () => {
  return (
    <Container className={'py-3'}>
      <Row className="justify-content-md-center">
        <Col md={12} xl={8}>
          <Stack direction="horizontal" gap={3}>
            <h1>Add post</h1>
          </Stack>
          <AddPostForm />
        </Col>
      </Row>
    </Container>
  );
};

export default PostAdd;
