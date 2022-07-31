import { Button, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = (props) => {
  const [postTitle, setPostTitle] = useState(props.postTitle);
  const [postAuthor, setPostAuthor] = useState(props.postAuthor);
  const [postDate, setPostDate] = useState(props.postDate);
  const [postDescription, setPostDescription] = useState(props.postDescription);
  const [postText, setPostText] = useState(props.postText);
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const {
    register,
    handleSubmit: validate,
    formState: { errors }
  } = useForm();
  const handleSubmit = () => {
    setContentError(!postText);
    setDateError(!postDate);
    if (postText && postDate) {
      props.action({
        title: postTitle,
        shortDescription: postDescription,
        content: postText,
        publishedDate: postDate,
        author: postAuthor,
        id: props.postId
      });
    }
  };

  return (
    <div>
      <Form onSubmit={validate(handleSubmit)}>
        <Row>
          <Col xl={6}>
            <Form.Group controlId="postTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                {...register('title', { required: true, minLength: 3 })}
                type="text"
                placeholder="Post title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
              {errors.title && (
                <small className="d-block form-text text-danger mt-2">This field is required</small>
              )}
            </Form.Group>
            <Form.Group controlId="postAuthor">
              <Form.Label>Author:</Form.Label>
              <Form.Control
                {...register('author', { required: true, minLength: 3 })}
                type="text"
                placeholder="Name Surname"
                value={postAuthor}
                onChange={(e) => setPostAuthor(e.target.value)}
              />
              {errors.author && (
                <small className="d-block form-text text-danger mt-2">This field is required</small>
              )}
            </Form.Group>
            <Form.Group controlId="postDate">
              <Form.Label>Date:</Form.Label>
              <DatePicker selected={postDate} onChange={(date) => setPostDate(date)} />
              {dateError && (
                <small className="d-block form-text text-danger mt-2">
                  Content can&apos;t be empty
                </small>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="postDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            {...register('description', { required: true, minLength: 20 })}
            as="textarea"
            rows={3}
            placeholder="Short description of the post"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />
          {errors.description && (
            <small className="d-block form-text text-danger mt-2">This field is required</small>
          )}
        </Form.Group>
        <Form.Group controlId="postText">
          <Form.Label>Post:</Form.Label>
          <ReactQuill theme="snow" value={postText} onChange={setPostText} />
          {contentError && (
            <small className="d-block form-text text-danger mt-2">
              Content can&apos;t be empty
            </small>
          )}
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
  postDate: PropTypes.instanceOf(Date),
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
