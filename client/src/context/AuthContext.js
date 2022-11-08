/** @format */

import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(null);
  let [user, setUser] = useState(null);

  let loginUser = async (e) => {
    e.preventDefault();
    let name1 = e.target.username.value;
    let password1 = e.target.password.value;
    console.log(name1);
    console.log(password1);
    console.log("form submitted");
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: name1, password: password1 }),
    });

    let data = await response.json();
    console.log(data);
    console.log(jwt_decode(data.access));
    console.log(response.status);
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
    }
  };

  let contextData = {
    User: user,
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
