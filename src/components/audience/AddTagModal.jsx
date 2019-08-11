import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const AddTagModal = props => (
  <Modal open dimmer="inverted" size="tiny" className="modal">
    <Modal.Header>Add Tags to User</Modal.Header>
    <Modal.Content>
      <tr>Tag 1</tr>
      <tr>Tag 1</tr>
      <tr>Tag 1</tr>
      <tr>Tag 1</tr>
    </Modal.Content>
    <Modal.Actions className="modal-action">
      <Button onClick={props.close} className="cancel">
          Close
      </Button>
      <Button className="primary">
          Add
      </Button>
    </Modal.Actions>
  </Modal>
);

AddTagModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default AddTagModal;
