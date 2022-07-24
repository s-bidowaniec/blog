import { Col, Container, Row, Stack } from 'react-bootstrap';
import PostForm from '../../featuers/PostForm/PostForm';

const PostAdd = () => {
  return (
    <Container className={'py-3'}>
      <Row className="justify-content-md-center">
        <Col md={12} xl={8}>
          <Stack direction="horizontal" gap={3}>
            <h1>Add post</h1>
          </Stack>
          <PostForm type={'new'} />
        </Col>
      </Row>
    </Container>
  );
};

export default PostAdd;
