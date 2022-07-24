import { Navigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import EditPostForm from '../../featuers/EditPostForm/EditPostForm';
import { Col, Container, Row, Stack } from 'react-bootstrap';

const PostEdit = () => {
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));
  if (!post) return <Navigate to="/" />;
  else
    return (
      <Container className={'py-3'}>
        <Row className="justify-content-md-center">
          <Col md={12} xl={8}>
            <Stack direction="horizontal" gap={3}>
              <h1>Edit post</h1>
            </Stack>
            <EditPostForm {...post} />
          </Col>
        </Row>
      </Container>
    );
};

export default PostEdit;
