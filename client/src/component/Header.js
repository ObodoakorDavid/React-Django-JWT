/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { User } = useContext(AuthContext);
  return (
    <div>
      <Link to="/"> Home</Link>
      <span> | </span>
      <Link to="/login"> Login</Link>
      {User && <p>Hello {User.iat}</p>}
      {/* {User ? <p>Hello {User.username}</p> : <p>Hello Annoy</p>} */}
    </div>
  );
};

export default Header;
