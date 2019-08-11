/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Grid, TextArea, Card, Feed, Icon } from 'semantic-ui-react';

const Messages = () => (
  <div className="component-wrapper messages">
    <h1 className="header-text">Messages</h1>
    <Grid>
      <Grid.Column width={4}>
        <Card>
          <Card.Content>
            <Card.Header>Conversations</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label> <Icon name="user circle" /></Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    Jenny Hess
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              
            </Feed>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column width={12}>
        <div className="messages-body">Message With User 1</div>
        <TextArea placeholder="Enter message here.." />
      </Grid.Column>
    </Grid>
  </div>
    )

export default Messages;