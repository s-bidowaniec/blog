import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

const DelModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        This operation will completely remove this post from the app. <br /> Are you sure that you
        want to do that?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={props.handleDelete}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DelModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleDelete: PropTypes.func
};

export default DelModal;
