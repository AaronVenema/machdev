import React from 'react'
import { Form } from 'semantic-ui-react'

const SrGrid = () => (
      <Form>
        <Form.Group  widths='equal'>
          <Form.Input className='bg-summary' fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Input fluid label='Email' placeholder='Email' />
        </Form.Group>
        <Form.TextArea label='Request' placeholder='What is your request?' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
export default SrGrid