import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect ,isAuthenticated , Logout} = useAuth0();

  return (
    <div>
      {
        isAuthenticated ? (

          <button onClick={() => Logout()}>Log Out</button>
        ):(

          <button onClick={() => loginWithRedirect()}>Log In</button>
        )
      }
    </div>
  )
}

export default Login
