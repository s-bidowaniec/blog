import { Button, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';

const PostForm = (props) => {
  const [postTitle, setPostTitle] = useState(props.postTitle);
  const [postAuthor, setPostAuthor] = useState(props.postAuthor);
  const [postDate, setPostDate] = useState(props.postDate);
  const [postDescription, setPostDescription] = useState(props.postDescription);
  const [postText, setPostText] = useState(props.postText);
  const onSubmit = (e) => {
    e.preventDefault();
    props.action({
      title: postTitle,
      shortDescription: postDescription,
      content: postText,
      publishedDate: postDate,
      author: postAuthor,
      id: props.postId
    });
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xl={6}>
            <Form.Group controlId="postTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Post title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="postAuthor">
              <Form.Label>Author:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name Surname"
                value={postAuthor}
                onChange={(e) => setPostAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="postDate">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="text"
                placeholder={'dd.mm.yyyy'}
                value={postDate}
                onChange={(e) => setPostDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="postDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Short description of the post"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="postText">
          <Form.Label>Post:</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Main content of the post"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </Form.Group>

        <Button className={'mt-2'} variant="primary" type="submit">
          {props.actionText}
        </Button>
      </Form>
    </div>
  );
};

PostForm.propTypes = {
  action: PropTypes.func,
  actionText: PropTypes.string,
  postTitle: PropTypes.string,
  postAuthor: PropTypes.string,
  postDate: PropTypes.string,
  postDescription: PropTypes.string,
  postText: PropTypes.string,
  postId: PropTypes.string
};
PostForm.defaultProps = {
  postTitle: '',
  postAuthor: '',
  postDate: '',
  postDescription: '',
  postText: '',
  postId: ''
};
export default PostForm;
