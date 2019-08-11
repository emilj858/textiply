import React from 'react';
import { Grid, TextArea } from 'semantic-ui-react';

const Messages = () => (
  <div className="component-wrapper messages">
    <h1 className="header-text">Messages</h1>
    <Grid>
      <Grid.Column width={4}>
        <div className="chat-list">
          <div className="chat-list-row">
              Chat 1 aksdfj ausd fjkas dfjka sdfjkh ajsdhf jkahsf kjahs dfjkh sjkahdf kjashf kjahs jkfhas jkdhf sjkfh jashdf j
          </div>
          <div className="chat-list-row">
              Chat 1 aksdfj ausd fjkas dfjka sdfjkh ajsdhf jkahsf kjahs dfjkh sjkahdf kjashf kjahs jkfhas jkdhf sjkfh jashdf j
          </div>
          <div className="chat-list-row">
              Chat 1 aksdfj ausd fjkas dfjka sdfjkh ajsdhf jkahsf kjahs dfjkh sjkahdf kjashf kjahs jkfhas jkdhf sjkfh jashdf j
          </div>
          <div className="chat-list-row">
              Chat 1 aksdfj ausd fjkas dfjka sdfjkh ajsdhf jkahsf kjahs dfjkh sjkahdf kjashf kjahs jkfhas jkdhf sjkfh jashdf j
          </div>
        </div>
      </Grid.Column>
      <Grid.Column width={12}>
        <div className="messages-body">Message With User 1</div>
        <TextArea placeholder="Enter message here.." />
      </Grid.Column>
    </Grid>
  </div>
    )

export default Messages;