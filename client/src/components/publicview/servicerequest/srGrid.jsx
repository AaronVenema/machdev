import React, { useState } from 'react'
import { Form, Message} from 'semantic-ui-react'

const SrGrid = () => {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    request: ''
  })

  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" });

  const handleInputChange = (e) => {
   setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleRequest = async (e) => {
    e.preventDefault();
    const postedServiceRequest = await fetch("/api/servicerequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })
    const newServiceRequest = await postedServiceRequest.json();
    console.log(newServiceRequest);
    if( newServiceRequest.result === 'success'){
      setFormMessage ({ type: "green", msg: "Project Submitted"});
      setUserData({
        firstname: '',
        lastname: '',
        email: '',
        request: ''
      });
    }
    else { 
      setFormMessage({ type: "red", msg: "uh oh, somthing went wrong, please try again later" });
    }
  }

  return (
    <>
    <Form onSubmit={handleRequest}>
      <Form.Group widths='equal'>
        <Form.Input required={true}
          className='bg-summary'
          fluid label='First name'
          placeholder='First name'
          name='firstname'
          value={userData.firstname}
          onChange={handleInputChange}
        />
        <Form.Input required={true}
          fluid label='Last name'
          placeholder='Last name'
          name='lastname'
          value={userData.lastname}
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
          <Message.Header>Notice</Message.Header>
          <p>
            { formMessage.msg }
          </p>
        </Message>
  )}
  </>
  )
}
export default SrGrid