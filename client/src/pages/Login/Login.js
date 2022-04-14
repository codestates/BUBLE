import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Login = ({ handleSignin }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleInputValue = (key, e) => {
    console.log(e.target.value);
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  console.log(loginInfo);

  return (
    <LoginDiv>
      <Logo to="/">BUBLE</Logo>
      <InputIdBox>
        <InputTitle>아이디</InputTitle>
        <InputId
          type="text"
          name="inputId"
          placeholder="아이디를 입력하세요."
          onChange={(e) => handleInputValue('email', e)}
        ></InputId>
      </InputIdBox>
      <InputPasswordBox>
        <InputTitle>비밀번호</InputTitle>
        <InputPassword
          type="password"
          name="inputPassword"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => handleInputValue('password', e)}
        ></InputPassword>
      </InputPasswordBox>
      <Link to="/signup">
        <Signup>회원가입</Signup>
      </Link>
      <LoginBtn
        onClick={() => {
          handleSignin(loginInfo);
        }}
      >
        로그인
      </LoginBtn>
    </LoginDiv>
  );
};

const LoginDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  color: black;
  text-decoration-line: none;
  font-size: 50px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  cursor: pointer;
`;
const InputIdBox = styled.div`
  margin-top: 40px;
`;

const InputTitle = styled.div`
  text-align: left;
  font-size: 15px;
  font-weight: bold;
`;
const InputId = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
`;

const InputPasswordBox = styled.div`
  margin-top: 15px;
`;
const InputPassword = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
`;

const LoginBtn = styled.button`
  margin-top: 12px;
  border-radius: 10px;
  border: none;
  width: 350px;
  height: 55px;
  font-size: 20px;
  font-weight: bold;
  background-color: #cbcbcb;
  color: white;
  cursor: pointer;
`;

const Signup = styled.button`
  margin-top: 45px;
  font-weight: 500;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export default Login;
