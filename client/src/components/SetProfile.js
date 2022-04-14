import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SetProfile = ({ userInfo, setUpdate }) => {
  return (
    <SignupDiv>
      <Button onClick={() => setUpdate(true)}>
        저장
      </Button>
      <InputNameBox>
        <InputTitle>
          이름*
        </InputTitle>
        <InputName
          type="text"
          name="inputName"
          placeholder={userInfo.userName}
        >
        </InputName>
      </InputNameBox>
      <InputEmailBox>
        <InputTitle>
          이메일*
        </InputTitle>
        <InputEmail
          type="text"
          name="inputEmail"
          placeholder={userInfo.email}
        >

        </InputEmail>
      </InputEmailBox>
      <InputPasswordBox>
        <InputTitle>
          비밀번호*
        </InputTitle>
        <InputPassword
          type="password"
          name="inputPassword"
          placeholder={userInfo.password}
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
          placeholder={userInfo.phoneNumber}
        >
        </InputPhoneNum>
      </InputPhoneNumBox>
      <InputFavBox>
        <InputTitle>
          선호 브랜드
        </InputTitle>
        <InputFav
          type="text"
          name="inputPhoneNum"
          placeholder={userInfo.favBrand}
        >

        </InputFav>
      </InputFavBox>

    </SignupDiv>

  )
}

const SignupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`

const Logo = styled(Link)`
  color: black;
  text-decoration-line: none;
  font-size: 50px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  cursor: pointer;
`

const InputNameBox = styled.div`
  margin-top: 20px;
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

const Button = styled.button`
background-color: white;
border: none;
font-size: 20px;
cursor: pointer;`

export default SetProfile;