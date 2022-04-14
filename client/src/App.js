import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
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

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState({
    id: '1',
    userName: '',
    email: '',
    password: '',
    favBrand: '나이키',
    phoneNumber: '',
  });
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
        console.log(signup);
        setSignup(true);
      });
  };

  console.log(isLogin);
  console.log(userinfo);
  console.log(signup);

  return (
    <Router>
      <div className="App">
        {/* <Basket userInfo={userInfo} /> */}
        {/* <Login /> */}

        <Routes>
          <Route exact path="/">
            <Landing
              userInfo={userinfo}
              setIsLogin={setIsLogin}
              isLogin={isLogin}
            />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}

          <Route path="/login">
            {/* 1. /로 간다 2.isLogin 의 상태에 따라 redirect */}
            {isLogin ? (
              <Redirect to="/mypage" />
            ) : (
              <Login handleSignin={handleSignin} />
            )}
          </Route>

          {/* <Route path="/signup">
            <Signup />
          </Route> */}

          <Route path="/signup">
            {signup ? (
              <Redirect to="/login" />
            ) : (
              <Signup handleSignup={handleSignup} />
            )}
          </Route>

          <Route path="/mypage">
            {isLogin ? (
              <Mypage
                setIsLogin={setIsLogin}
                userInfo={userinfo}
                isLogin={isLogin}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/basket">
            {isLogin ? (
              <Basket
                setIsLogin={setIsLogin}
                userInfo={userinfo}
                isLogin={isLogin}
              />
            ) : (
              <Redirect to="/login" />
            )}

            <Route path="*" component={NotFound} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
