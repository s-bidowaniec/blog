import { Button, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = (props) => {
  const [postTitle, setPostTitle] = useState(props.postTitle);
  const [postAuthor, setPostAuthor] = useState(props.postAuthor);
  const [postDate, setPostDate] = useState(props.postDate);
  const [postDescription, setPostDescription] = useState(props.postDescription);
  const [postText, setPostText] = useState(props.postText);
  const [postCategory, setPostCategory] = useState(props.postCategory);
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const categories = useSelector((state) => getAllCategories(state));
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
        category: postCategory,
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
            <p>{postCategory}</p>
            <Form.Group controlId="postCategory">
              <Form.Label>Category:</Form.Label>
              <Form.Control
                as={'select'}
                value={postCategory}
                onChange={(e) => setPostCategory(e.target.value)}>
                {categories.map((cat) => {
                  return <option key={cat.id}>{cat.name}</option>;
                })}
              </Form.Control>
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
  postId: PropTypes.string,
  postCategory: PropTypes.string
};
PostForm.defaultProps = {
  postTitle: '',
  postAuthor: '',
  postDate: new Date(),
  postDescription: '',
  postText: '',
  postId: '',
  postCategory: 'News'
};
export default PostForm;
