import React, { Component } from 'react'
import { Header, Form, Button } from 'semantic-ui-react'

class ConfigPanel extends Component {
  state = { serverNm: 'Server 1' }
  render() {
    return (
      <div>
        <Header as='h1'>Configure Server</Header>
        <Form>
          <Form.Input label='Server Name' placeholder='Server name' defaultValue='Server 1' />
          <Form.Input label='URL' placeholder='Tomcat manager URL' defaultValue='http://www.myplace.com/manager/text' />
          <Form.Input label='Credential' placeholder='Credentials' defaultValue='Svr1' />
        </Form>
        <br />
        <Button content='Save Changes' />
        <Button content='Disable Server' />
      </div>
    )
  }
}

export default ConfigPanel
