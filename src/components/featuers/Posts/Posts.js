import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import PostCard from '../PostCard/PostCard';
import { Row, Col } from 'react-bootstrap';

const Posts = () => {
  const posts = useSelector((state) => getAllPosts(state));
  return (
    <Row>
      {posts.map((post) => (
        <Col sm={6} xl={4} key={post.id}>
          <PostCard {...post}></PostCard>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
