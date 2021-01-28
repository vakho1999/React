import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import database from "../Initfirebase/firebase";
import { AuthContext } from "../authentication/auth";
import {Container} from "react-bootstrap";
import "../../staticfiles/App.css"


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password, register} = event.target.elements;
      console.log(register.value === 'true')
      if (register.value === 'true'){
          
          history.push("/signup");
          
      } else {

        try {
            await database
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
          } catch (error) {
            alert(error);
          }
      }
      
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Container className='align-item-md-center'>

      <div className="wrapper fadeInDown">
          <div id="formContent">
          
            <div className="fadeIn first">
              <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" id="icon" alt="User Icon" />
            </div>
        
            <form onSubmit={handleLogin}>
              <input type="email" id="email" className="fadeIn second" name="email" placeholder="email"/>
              <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
              <input type="submit" className="fadeIn fourth" value="Log In"/>
              <button type="submit" name='register' className="btn btn-danger" onClick={(event)=>{event.target.value = true}} >register</button>
            </form>
        
          
            <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
        
          </div>
      </div>
    </Container>
    
    // <div>
    //   <h1>Log in</h1>
    //   <form onSubmit={handleLogin}>
    //     <label>
    //       Email
    //       <input name="email" type="email" placeholder="Email" />
    //     </label>
    //     <label>
    //       Password
    //       <input name="password" type="password" placeholder="Password" />
    //     </label>
    //     <button type="submit">Log in</button>
    //     <button type="submit" name='register' onClick={(event)=>{event.target.value = true}} >register</button>
    //   </form>
    // </div>
  );
};

export default withRouter(Login);