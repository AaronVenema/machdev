import React from 'react'
import { Form } from 'semantic-ui-react'

const LogoutGrid = () => (
      <Form>
        <Form.Group widths='equal'>
          <Form.TextArea fluid label='Email' placeholder='userName'>Hello Usernmae</Form.TextArea>
        </Form.Group>
        <Form.Button>Logout</Form.Button>
      </Form>
    )
export default LogoutGrid