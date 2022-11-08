/** @format */

import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  let {loginUser} = useContext(AuthContext)

  return (
    <div>
      <form action="" onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
