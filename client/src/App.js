import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch as Routes,
  Route,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Mypage from './pages/Mypage/Mypage';
import Landing from './pages/Landing/Landing';
import Basket from './pages/Basket/Basket';
import NotFound from './components/Notfound';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const [signup, setSignup] = useState(false);

  const handleSignin = async ({ email, password }) => {
    console.log(email, password);
    let answer = await axios
      .post(
        'https://localhost:4000/users/signin',
        JSON.stringify({ email, password }), // data can be `string` or {object}!
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem('accessToken', res.data.accessToken);
        setUserinfo(res.data.data);
        setIsLogin(true);
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
        'https://localhost:4000/users/signup',
        JSON.stringify({ email, password, favBrand, userName, phoneNumber }), // data can be `string` or {object}!
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setSignup(true);
      });
  };

  console.log(isLogin);
  console.log(userinfo);
  console.log(signup);

  return (
    <div className="App">
      {/* {isLoading && <Loding/>} */}
      {/* 안녕 */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Landing isLogin={isLogin} />
          </Route>

          <Route path="/mypage">
            <Mypage userInfo={userinfo} />
          </Route>

          {/* <Route path="/login">
            <Login handleSignin={handleSignin} />
          </Route> */}

          <Route path="/login">
            {/* 1. /로 간다 2.isLogin 의 상태에 따라 redirect */}
            {isLogin ? (
              <Redirect to="/mypage" />
            ) : (
              <Login handleSignin={handleSignin} />
            )}
          </Route>

          <Route path="/signup">
            {signup ? (
              <Redirect to="/login" />
            ) : (
              <Signup handleSignup={handleSignup} />
            )}
          </Route>

          <Route path="/Basket" component={Basket} />

          <Route path="*" component={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
