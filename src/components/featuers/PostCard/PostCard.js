import PropTypes from 'prop-types';
import { Card, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const PostCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <strong>Author:</strong> {props.author}
          <br />
          <strong>Date:</strong> {props.publishedDate}
          <br />
          {props.shortDescription}
        </Card.Text>
        <Button variant="primary">
          <Nav.Link as={NavLink} to={'/post/' + props.id}>
            Read more
          </Nav.Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  shortDescription: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  id: PropTypes.string
};

export default PostCard;
