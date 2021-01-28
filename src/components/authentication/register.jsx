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

      <div className="wrapper fadeInDown">
          <div id="formContent">
          
            <div className="fadeIn first">
              <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" id="icon" alt="User Icon" />
            </div>
        
            <form onSubmit={handleSignUp}>
              <input type="email" id="login" className="fadeIn second" name="email" placeholder="email"/>
              <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
              <input type="submit" className="fadeIn fourth" value="Sign Up"/>
              
            </form>
    
        
          </div>
      </div>
    </Container>
  );
};

export default withRouter(SignUp);