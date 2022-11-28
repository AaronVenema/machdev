import React from 'react'
import { Form } from 'semantic-ui-react'

const ElGrid = () => (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Email' placeholder='Email' />
          <Form.Input fluid label='Password' placeholder='Password' />
        </Form.Group>
        <Form.Button>Login</Form.Button>
      </Form>
    )
export default ElGrid