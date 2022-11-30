import React from 'react';
import { Form, Message } from 'semantic-ui-react';

import { useState } from "react";
import Cookie from "js-cookie";
import { useAppContext } from "../utils/AppContext";
import { useEffect } from "react";

const ElGrid = () => {
  const { appState, setAppState } = useAppContext();

  const [ loginCreds, setLoginCreds ] = useState({ email: "", password: "" });
  const [ formMessage, setFormMessage ] = useState({ type: "", msg: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormMessage({ type: "", msg: "" });
    const authCheck = await fetch("/api/employee/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginCreds)
    })
    const authResult = await authCheck.json();

    // If the login was good, save the returned token as a cookie
    if( authResult.result === "success" ){
      Cookie.set("auth-token", authResult.token)
      setAppState({...appState, employee: authResult.employee});
    } else {
      setFormMessage({ type: "red", msg: "We could not log you in with the credentials provided." });
    }
    setLoginCreds({ email: "", password: "" });
  };

  const handleInputChange = (e) => {
    setLoginCreds({...loginCreds, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if( appState && appState.employee ) window.location.href = "/"
  }, [appState]);

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group widths='equal'>
          <Form.Input 
            fluid
            label='Email'
            placeholder='Email'
            name="email"
            value={loginCreds.email}
            onChange={handleInputChange}
          />
          <Form.Input 
            fluid
            type="password"
            label='Password'
            placeholder='Password'
            name="password"
            value={loginCreds.password}
            onChange={handleInputChange} 
          />
        </Form.Group>
        <Form.Button>Login</Form.Button>
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
  );
};

export default ElGrid;