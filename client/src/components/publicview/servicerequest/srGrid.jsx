import React, { useState } from 'react'
import { Form, Message} from 'semantic-ui-react'

const SrGrid = () => {
  const [userData, setUserData] = useState({
    name: '',
    last: '',
    email: '',
    request: ''
  })
  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" });

  const handleInputChange = (e) => {
   setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const handleRequest = async (e) => {
    e.preventDefault();
    const bodyHolder = {name:userData.name.concat(userData.last), description: userData.request, completed: false}
    const postedProjects = await fetch("/api/project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyHolder)
    })
    const newProject = await postedProjects.json();
    console.log(newProject)
    if( newProject.result === 'success'){
      setFormMessage ({ type: "green", msg: "Project Submitted"})
    }
    else { setFormMessage({ type: "red", msg: "uh oh, somthing went wrong, please try again later" });}
  }
  return (
    <>
    <Form onSubmit={handleRequest}>
      <Form.Group widths='equal'>
        <Form.Input required={true}
          className='bg-summary'
          fluid label='First name'
          placeholder='First name'
          name='name'
          value={userData.name}
          onChange={handleInputChange}
        />
        <Form.Input required={true}
          fluid label='Last name'
          placeholder='Last name'
          name='last'
          value={userData.last}
          onChange={handleInputChange} />

        <Form.Input required={true}
          fluid label='Email'
          placeholder='Email'
          name='email'
          value={userData.email}
          onChange={handleInputChange} />

      </Form.Group>
      <Form.TextArea required={true}
        label='Request'
        placeholder='What is your request?'
        name='request'
        value={userData.request}
        onChange={handleInputChange} />
      <Form.Button>Submit</Form.Button>
    </Form>
      { formMessage.msg.length > 0 && (
        <Message color={formMessage.type}>
          <Message.Header>Alert</Message.Header>
          <p>
            { formMessage.msg }
          </p>
        </Message>
  )}
  </>
  )
}
export default SrGrid