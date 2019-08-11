import React, { useState } from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';
import Loader from '../helpers/Loader';
import AddContactModal from './AddContactModal';
import UploadCsvModal from './UploadCsvModal';
import AddTagModal from './AddTagModal';

const Audience = () => {

  const [loading, setLoading] = useState(false);
  const [addContactModal, setAddContactModal] = useState(false);
  const [csvModal, setCsvModal] = useState(false);
  const [addTagModal, setAddTagModal] = useState(false);


  const tableBody =(
    <React.Fragment>
      <Table.Row>
        <Table.Cell>Emil Juboori</Table.Cell>
        <Table.Cell>(858)775-4405</Table.Cell>
        <Table.Cell>100 Park Plaza</Table.Cell>
        <Table.Cell>San Diego</Table.Cell>
        <Table.Cell>
          Tag 1
          <Icon name="plus" className="add-tag-icon" />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Emil Juboori</Table.Cell>
        <Table.Cell>(858)775-4405</Table.Cell>
        <Table.Cell>100 Park Plaza</Table.Cell>
        <Table.Cell>San Diego</Table.Cell>
        <Table.Cell>Tag 2</Table.Cell>
      </Table.Row>
    </React.Fragment>
  )

  if (addContactModal) {
    return (
      <AddContactModal
        close={() => {
          setAddContactModal(false);
        }}
      />
    );
  }

  if (csvModal) {
    return (
      <UploadCsvModal
        close={() => {
          setCsvModal(false);
        }}
      />
    );
  }

  if (addTagModal) {
    return (
      <AddTagModal
        close={() => {
          setAddTagModal(false);
        }}
      />
    );
  }

  return (
    <div className="component-wrapper audience">
      <div className="audience-header-wrapper">
        <h1 className="header-text">Audience</h1>
        <div className="audience-add-button-wrapper">
          <Button className="ui primary button" onClick={() => setAddContactModal(true)}>Add Contact</Button>
          <Button color='green' onClick={() => setCsvModal(true)}>Upload CSV</Button>
        </div>
      </div>
      {/* <div>subtext</div>
      <Button className="ui primary button" onClick={()=> setLoading(!loading)}>Loadiong</Button> */}
      <Table stackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Zip</Table.HeaderCell>
            <Table.HeaderCell>Tag</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableBody}
        </Table.Body>
      </Table>
      {loading ? <Loader isLoading /> : null}
    </div>
  )
}

export default Audience;