import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Login = () => {
  return (
    <LoginDiv>
      <Logo>
        BUBLE
      </Logo>
      <InputIdBox>
        <InputTitle>
          아이디
        </InputTitle>
        <InputId
          type="text"
          name="inputId"
          placeholder="아이디를 입력하세요."
        >
        </InputId>
      </InputIdBox>
      <InputPasswordBox>
        <InputTitle>
          비밀번호
        </InputTitle>
        <InputPassword
          type="password"
          name="inputPassword"
          placeholder="비밀번호를 입력하세요"
        >

        </InputPassword>
      </InputPasswordBox>
      <LoginBtn>
        로그인
      </LoginBtn>
      <LookList>
        <Signup>회원가입</Signup>
        <FindId>아이디 찾기</FindId>
        <FindPassword>패스워드 찾기</FindPassword>
      </LookList>
    </LoginDiv >
  )
}

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.div`
  font-size: 50px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  cursor: pointer;
`
const InputIdBox = styled.div`
  margin-top: 40px;
`

const InputTitle = styled.div`
  text-align: left;
  font-size: 15px;
  font-weight: bold;
  `
const InputId = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
`

const InputPasswordBox = styled.div`
margin-top:15px;
`
const InputPassword = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
`

const LoginBtn = styled.button`
margin-top: 45px;
border-radius: 10px;
border: none;
width: 350px;
height: 55px;
font-size: 20px;
font-weight: bold;
background-color: #CBCBCB;
color: white;
cursor: pointer;
`

const LookList = styled.div`
display: flex;
`

const Signup = styled.div``
const FindId = styled.div``
const FindPassword = styled.div``

export default Login;
