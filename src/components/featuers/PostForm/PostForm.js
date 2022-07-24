import { Button, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const PostForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postDate, setPostDate] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [postText, setPostText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title: postTitle,
        shortDescription: postDescription,
        content: postText,
        publishedDate: postDate,
        author: postAuthor
      })
    );
    navigate('/');
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
                type="date"
                placeholder={''}
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
          {props.type === 'new' ? 'Add post' : 'Update'}
        </Button>
      </Form>
    </div>
  );
};

PostForm.propTypes = {
  type: PropTypes.string
};

export default PostForm;
