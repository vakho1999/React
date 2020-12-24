import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/views/home";
import Login from "./components/authentication/login";
import SignUp from "./components/authentication/register";
import { AuthProvider } from "./components/authentication/auth";
import PrivateRoute from "./components/route/Privateroute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;