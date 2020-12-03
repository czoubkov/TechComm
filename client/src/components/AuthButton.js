import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';

const classes = "btn btn-primary ml-1";

const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return (
      <div>
        <Link className={classes} to="/signup">Signup</Link>
        <Link className={classes} to="/login">Login</Link>
      </div>
    );
  }
  
  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
      <button className={classes} onClick={logout}>Logout</button>
    </div>
  );
});

export default AuthButton;
