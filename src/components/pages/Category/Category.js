import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../../redux/postsRedux';
import { Col, Row, Container } from 'react-bootstrap';
import PostCard from '../../featuers/PostCard/PostCard';

const Category = () => {
  const { name } = useParams();
  const posts = useSelector((state) => getPostsByCategory(state, name));
  return (
    <Container>
      <h2 className={'me-auto'}>Category: {name}</h2>
      <Row>
        {posts.map((post) => (
          <Col sm={6} xl={4} key={post.id}>
            <PostCard {...post}></PostCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
