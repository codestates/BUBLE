import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = ({ handleSignin, userinfo }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputValue = (key) => (e) => {
    console.log(e.target.value);
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  console.log(loginInfo);

  return (
    <div className="App">
      <div>
        <input
          onChange={handleInputValue("email")}
          style={{ border: "1px solid black", display: "block" }}
        ></input>
        <input
          onChange={handleInputValue("password")}
          style={{ border: "1px solid black", display: "block" }}
        ></input>
        <button onClick={() => handleSignin(loginInfo)}>로그인</button>
        {userinfo ? (
          <>
            <div>{userinfo.id}</div>
            <div>{userinfo.userName}</div>
            <div>{userinfo.phoneNumber}</div>
            <div>{userinfo.favBrand}</div>
            <div>{userinfo.email}</div>
            <div>{userinfo.password}</div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
