import axios from "axios";
import React, { useEffect, useState } from "react";

const Signup = ({ handleSignup }) => {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    userName: "",
    phoneNumber: "",
    favBrand: "",
  });

  const handleInputValue = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

  console.log(signupInfo);

  return (
    <div>
      <input
        onChange={handleInputValue("userName")}
        style={{ border: "1px solid black", display: "block" }}
      ></input>
      <input
        onChange={handleInputValue("email")}
        style={{ border: "1px solid black", display: "block" }}
      ></input>
      <input
        onChange={handleInputValue("password")}
        style={{ border: "1px solid black", display: "block" }}
      ></input>
      <input
        onChange={handleInputValue("phoneNumber")}
        style={{ border: "1px solid black", display: "block" }}
      ></input>
      <input
        onChange={handleInputValue("favBrand")}
        style={{ border: "1px solid black", display: "block" }}
      ></input>
      <button onClick={() => handleSignup(signupInfo)}>회원가입</button>
    </div>
  );
};
export default Signup;
