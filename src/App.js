import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import Loding from './component/Loding';
import styled from 'styled-components';
import Footer from "./components/Footer";

const test = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;
`

function App() {
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
    {isLoading && <Loding/>}
     
    </div>
  )}

export default App




