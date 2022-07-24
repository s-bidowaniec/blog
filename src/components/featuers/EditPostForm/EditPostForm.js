import PostForm from '../PostForm/PostForm';
import { editPost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditPostForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    dispatch(editPost(post));
    navigate('/');
  };
  return (
    <PostForm
      action={handleSubmit}
      actionText={'Edit Post'}
      postTitle={props.title}
      postAuthor={props.author}
      postDate={props.publishedDate}
      postDescription={props.shortDescription}
      postText={props.content}
      postId={props.id}
    />
  );
};
EditPostForm.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string
};
export default EditPostForm;
