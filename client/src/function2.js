import axios from "axios";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Signout from "./Signout";
import Product from "./Product";
import Mypage from "./Mypage";

function App() {
  const [userinfo, setUserinfo] = useState(null);

  const handleSignin = async ({ email, password }) => {
    console.log(email, password);
    let answer = await axios
      .post(
        "https://localhost:4000/users/signin",
        JSON.stringify({ email, password }), // data can be `string` or {object}!
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        window.localStorage.setItem("accessToken", res.data.accessToken);
        setUserinfo(res.data.data);
      });
  };

  const handleSignup = async ({
    userName,
    phoneNumber,
    favBrand,
    email,
    password,
  }) => {
    console.log(userName, phoneNumber, favBrand, email, password);

    let answer = await axios
      .post(
        "https://localhost:4000/users/signup",
        JSON.stringify({ email, password, favBrand, userName, phoneNumber }), // data can be `string` or {object}!
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => console.log(res));
  };

  const handleSignout = async () => {
    const accessToken = window.localStorage.getItem("accessToken");
    console.log("signout :", accessToken);
    if (accessToken) {
      window.localStorage.removeItem("accessToken");
    } //accessToken삭제
    //cookie에서 refreshToken 삭제 필요
    let answer = await axios({
      url: "https://localhost:4000/users/signout",
      method: "POST", // or 'PUT'
      // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        authorization: `jwt ${accessToken}`,
      },
    }).then((res) => console.log(res.data));
  };

  const getHistory = async (endpoint) => {
    if (!userinfo) {
      console.log("not logged in");
      return;
    }
    const { id } = userinfo;
    const accessToken = window.localStorage.getItem("accessToken");
    console.log(id, accessToken);
    console.log(`https://localhost:4000/orders/${id}/${endpoint}`);
    let answer = await axios({
      url: `https://localhost:4000/orders/${id}/${endpoint}`,
      method: "GET", // or 'PUT'
      // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
        authorization: `jwt ${accessToken}`,
      },
    }).then((res) => console.log(res.data));
  };

  const postHistory = async (itemId, endpoint) => {
    if (!userinfo) {
      console.log("not logged in");
      return;
    }
    const { id: userId } = userinfo;
    const accessToken = window.localStorage.getItem("accessToken");
    console.log(userId, accessToken);
    console.log(`https://localhost:4000/orders/${userId}/${endpoint}`);

    let answer = await axios
      .post(
        `https://localhost:4000/orders/${userId}/${endpoint}`,
        JSON.stringify({ itemId, userId }), // data can be `string` or {object}!
        {
          headers: {
            "content-type": "application/json",
            authorization: `jwt ${accessToken}`,
          },
        }
      )
      .then((res) => console.log(res.data));
  };

  return (
    <div className="App">
      <Login handleSignin={handleSignin} userinfo={userinfo} />
      <Signup handleSignup={handleSignup} />
      <Signout handleSignout={handleSignout} />
      <Product postHistory={postHistory} />
      <Mypage getHistory={getHistory} />
    </div>
  );
}

export default App;
