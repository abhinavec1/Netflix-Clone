import React from "react";

import Nav from '../nav/Nav';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className="main">
      {/* Nav */}
      <Nav />
      {/* End Nav */}
      {/* Login Form */}
      <LoginForm />
      {/* End Login Form */}
    </div>
  );
}

export default Login;