import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Label, Form } from 'semantic-ui-react';

const AddContactModal = props => {

  const addContact = async () => {
    try {
      // api call to add contact
    } catch (err) {
        // error message
    }
  };


  return (
    <Modal open dimmer="inverted" size="tiny" className="modal">
      <Modal.Header>Add Contact</Modal.Header>
      <Modal.Content className="add-contact-modal-content">
        <Form>
          <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-phone-number'
            label='Phone number (Required)'
            placeholder='Phone number'
          />
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              id='form-subcomponent-shorthand-input-first-name'
              label='First name'
              placeholder='First name'
            />
            <Form.Input
              fluid
              id='form-subcomponent-shorthand-input-last-name'
              label='Last name'
              placeholder='Last name'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              id='form-subcomponent-shorthand-input-address'
              label='Address'
              placeholder='Address'
            />
            <Form.Input
              fluid
              id='form-subcomponent-shorthand-input-zip-code'
              label='Zip Code'
              placeholder='Zip Code'
            />
          </Form.Group>
        </Form>
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
};

AddContactModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default AddContactModal;
