import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const Campaign = () => (
  <div className="component-wrapper">
    <h1 className="header-text">Campaign</h1>
    <div>Campaigns are based on keywords you promote to your audience. People who enter your keyword will be automatically added to your audience and recieve an automated reponse.</div>
    <div>Set Keyword</div>
    <Input />
    <div>Automated Response</div>
    <Input />
    <Button className="primary">Save </Button>
  </div>
    )

export default Campaign;