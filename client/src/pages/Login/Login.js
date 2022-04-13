import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Login = ({ userinfo, setUserinfo, setIsLogin, isLogin }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleInputValue = (key, e) => {
    console.log(e.target.value);
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

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
        window.localStorage.setItem('accessToken', res.data.accessToken);
        setUserinfo(res.data.data);
        setIsLogin(true);
      });
  };

  console.log(loginInfo);
  console.log(userinfo);

  // return (
  //   <div className="App">
  //     <div>
  //       <input
  //         onChange={handleInputValue('email')}
  //         style={{ border: '1px solid black', display: 'block' }}
  //       ></input>
  //       <input
  //         onChange={handleInputValue('password')}
  //         style={{ border: '1px solid black', display: 'block' }}
  //       ></input>
  //       <button onClick={() => handleSignin(loginInfo)}>로그인</button>
  //       {userinfo ? (
  //         <>
  //           <div>{userinfo.id}</div>
  //           <div>{userinfo.userName}</div>
  //           <div>{userinfo.phoneNumber}</div>
  //           <div>{userinfo.favBrand}</div>
  //           <div>{userinfo.email}</div>
  //           <div>{userinfo.password}</div>
  //         </>
  //       ) : null}
  //     </div>
  //   </div>
  // );

  return (
    <LoginDiv>
      <Logo>BUBLE</Logo>
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
      <LoginBtn
        onClick={() => {
          handleSignin(loginInfo);
        }}
      >
        로그인
      </LoginBtn>
      <LookList>
        <Signup>회원가입</Signup>
      </LookList>
    </LoginDiv>
  );
};

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
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
  margin-top: 45px;
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

const LookList = styled.div`
  display: flex;
`;

const Signup = styled.a`
  margin-top: 12px;
  font-weight: 500;
`;

export default Login;
