import React from 'react';
import { Card, Feed, Input, Button, Icon } from 'semantic-ui-react';

const Login = () => (
  <div className="component-wrapper">
    <Card className="login-wrapper">
      <Card.Content>
        <Card.Header>Login</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Content>
              <Feed.Summary>
                <Input iconPosition='left' placeholder='Email'>
                  <Icon name='at' className="email-icon" />
                  <input />
                </Input>
                <Input />
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
      <Card.Content extra>
        <Button>Login</Button>
      </Card.Content>
    </Card>
  </div>
    )

export default Login;