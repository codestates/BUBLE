import React, { useEffect, useState } from 'react';
// import { Routes, Route, Redirect, useHistory, BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
// import Loding from './components/Loding';
// import styled from 'styled-components';
import Footer from "./components/Footer";
import Header from "./components/Header"
import Login from "./pages/Login"

function App() {
  // const [token, setToken] = useState("");
  // const [isLogin, setIsLogin] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);


  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  )
}

export default App




