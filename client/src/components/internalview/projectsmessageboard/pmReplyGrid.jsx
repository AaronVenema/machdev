import React, { useState, useEffect } from 'react';
import { Button, Comment, Form, Message } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from "../../publicview/utils/AppContext";

const PmReplyGrid = () => {
  const { appState } = useAppContext();

  const location = useLocation();
  const {from} = location.state;

  const [messageData, setMessageData] = useState({
    body: ""
  });

  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" });

  const handleInputChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value })
  }

  const handleReply = async (e) => {
    e.preventDefault();

    const postedMessage = await fetch(`/api/project/${from._id}/${appState.employee._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({message: messageData.body, likes: 0})
    })
    const newMessage = await postedMessage.json();
    if( newMessage.result === 'success'){
      setFormMessage({ type: "green", msg: "Reply submitted"});
      setMessageData({
        body: ""
      });
    }
    else { 
      setFormMessage({ type: "red", msg: "Something went wrong, please try again later" });
    }
    window.location.reload();
  };
  
  return(
    <>
      <Comment.Group className="text-center">
        <Form onSubmit={handleReply} reply>
          <Form.TextArea
            style={{ width:"25vw", height:"10vh"}}
            onChange={handleInputChange}
            name="body"
            value={messageData.body}
          />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
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

export default PmReplyGrid