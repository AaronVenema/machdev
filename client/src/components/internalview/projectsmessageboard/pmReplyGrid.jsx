import React from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'

const PmReplyGrid = () => (
  <Comment.Group>
    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
)

export default PmReplyGrid