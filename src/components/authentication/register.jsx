import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import database from "../Initfirebase/firebase";
import {Container} from "react-bootstrap";
const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await database
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Container className='align-item-md-center'>

      <div class="wrapper fadeInDown">
          <div id="formContent">
          
            <div class="fadeIn first">
              <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" id="icon" alt="User Icon" />
            </div>
        
            <form onSubmit={handleSignUp}>
              <input type="email" id="login" class="fadeIn second" name="email" placeholder="email"/>
              <input type="password" id="password" class="fadeIn third" name="password" placeholder="password"/>
              <input type="submit" class="fadeIn fourth" value="Sign Up"/>
              
            </form>
    
        
          </div>
      </div>
    </Container>
  );
};

export default withRouter(SignUp);