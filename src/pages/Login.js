import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import logoImg from "../static/img-locks-alt.gif";
import { Card, Logo, Form, Input, Button } from "../components/AuthForms";


function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function postLogin({userName,password}) {
    
    const isLoggedIn = false;
    if (localStorage.getItem(userName) === password){
      isLoggedIn = true
    }
    if (isLoggedIn) {
      return <Redirect to='/' />;
    }

    return <div>You Are not Registered</div>
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={() => postLogin(userName,password)}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        
    </Card>
  );
}

export default Login;