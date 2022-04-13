import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Signup = () => {
  return (
    <SignupDiv>
      <SignUpTitlte>
        회원가입
      </SignUpTitlte>
      <InputNameBox>
        <InputTitle>
          이름*
        </InputTitle>
        <InputName
          type="text"
          name="inputName"
          placeholder="이름을 입력하세요."
        >
        </InputName>
      </InputNameBox>
      <InputIdBox>
        <InputTitle>
          아이디*
        </InputTitle>
        <InputId
          type="text"
          name="inputId"
          placeholder='아이디를 입력하세요.'
        >
        </InputId>
      </InputIdBox>
      <InputPasswordBox>
        <InputTitle>
          비밀번호*
        </InputTitle>
        <InputPassword
          type="password"
          name="inputPassword"
          placeholder='비밀번호를 입력하세요.'
        >

        </InputPassword>
      </InputPasswordBox>
      <InputPhoneNumBox>
        <InputTitle>
          전화번호*
        </InputTitle>
        <InputPhoneNum
          type="text"
          name="inputPhoneNum"
          placeholder="전화번로를 입력하세요."
        >
        </InputPhoneNum>
      </InputPhoneNumBox>
      <InputEmailBox>
        <InputTitle>
          이메일*
        </InputTitle>
        <InputEmail
          type="text"
          name="inputEmail"
          placeholder="이메일을 입력하세요."
        >

        </InputEmail>
      </InputEmailBox>
      <InputFavBox>
        <InputTitle>
          선호 브랜드
        </InputTitle>
        <InputFav
          type="text"
          name="inputPhoneNum"
          placeholder="선호브랜드를 입력하세요. 예) 나이키, 아디다스"
        >

        </InputFav>
      </InputFavBox>
      <SignupBtn>
        회원가입
      </SignupBtn>
    </SignupDiv>
  )
}

const SignupDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const SignUpTitlte = styled.div`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
`

const InputNameBox = styled.div`
  margin-top: 40px;
  `

const InputIdBox = styled.div`
  margin-top: 40px;
  `

const InputPasswordBox = styled.div`
  margin-top: 40px;
  `

const InputPhoneNumBox = styled.div`
  margin-top: 40px;
  `
const InputEmailBox = styled.div`
  margin-top: 40px;
  `

const InputFavBox = styled.div`
  margin-top: 40px;
  `

const InputTitle = styled.div`
  text-align: left;
  font-size: 15px;
  font-weight: bold;
  `

const InputName = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
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

const InputPassword = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
  `

const InputEmail = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
  `

const InputPhoneNum = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
  `

const InputFav = styled.input`
  margin-top: 5px;
  width: 350px;
  height: 45px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
  `

const SignupBtn = styled.button`
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

export default Signup;
