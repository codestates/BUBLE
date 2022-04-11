import React, { useEffect, useState } from 'react';
import { Routes, Route, Redirect, useHistory, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Loding from './components/Loding';
import styled from 'styled-components';
import Footer from "./components/Footer";
import Landing from './pages/Landing';
import Basket from './pages/Basket';
import NotFound from './components/Notfound';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Mypage from './pages/Mypage'
// import Basket from './pages/Basket';
// import Brand from "./pages/Landing"

const test = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;
`


function App() {
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
  return (
    <div className="App">
    {isLoading && <Loding/>}
    {/* 안녕 */}
    <Landing/>
    {/* <Basket></Basket> */}
    {/* <NotFound/> */}
     {/* <Footer/> */}
     {/* <BrowserRouter>
     <Routes>
        <Route exact path="/">
          <Brand />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/mypage">
          {isLogin ? <Mypage /> : <Redirect to="/" />}
          <Mypage />
        </Route>
        <Route path="/Basket" component={Basket} />
        <Route path="*" component={NotFound} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )}

export default App




