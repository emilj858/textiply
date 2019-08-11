import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Input } from 'semantic-ui-react';
import Dropzone from './Dropzone'

const UploadCsvModal = props => (
  <Modal open dimmer="inverted" size="tiny" className="modal">
    <Modal.Header>Upload CSV</Modal.Header>
    <Modal.Content>
      <Dropzone />
    </Modal.Content>
    <Modal.Actions className="modal-action">
      <Button onClick={props.close} className="cancel">
          Close
      </Button>
      <Button className="primary">
          Upload
      </Button>
    </Modal.Actions>
  </Modal>
);

UploadCsvModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default UploadCsvModal;
