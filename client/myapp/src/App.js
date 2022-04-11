import axios from "axios";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [userinfo, setUserinfo] = useState(null);

  const handleSignin = async ({ email, password }) => {
    let answer = await axios({
      url: "https://localhost:4000/users/signin",
      method: "POST", // or 'PUT'
      data: { email: email, password: password }, // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setUserinfo(res.data.data));
  };

  const handleSignup = async () => {
    let answer = await axios({
      url: "https://localhost:4000/users/signup",
      method: "POST", // or 'PUT'
      data: {
        userName: "없는사용자",
        phoneNumber: "010-0000-0000",
        favBrand: "나이키",
        email: "email3@email.com",
        password: "12356",
      },
      // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <Login handleSignin={handleSignin} userinfo={userinfo} />
      <Signup handleSignup={handleSignup} />
    </div>
  );
}

export default App;
