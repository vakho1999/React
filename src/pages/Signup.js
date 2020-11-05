import React , { useState } from "react";
import { Link } from 'react-router-dom';
import logoImg from "../static/img-locks-alt.gif";
import { Card, Logo, Form, Input, Button } from '../components/AuthForms';
import {  Redirect } from "react-router-dom";
function Signup() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function Register({userName,password}){

    localStorage.setItem(userName,password)
    
    return <Redirect to='/login' />;
    
  }
  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input type="username" placeholder="username"  value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}/>
        <Input type="password" placeholder="password" value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}/>
        <Input type="password" placeholder="password again" />
        <Button onClick={() => Register(userName,password)}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;