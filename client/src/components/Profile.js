import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Profile = ({ userInfo, setUpdate }) => {
    return (
        <SignupDiv>
            <Button onClick={() => setUpdate(false)}>
                수정
            </Button>
            <InputNameBox>
                <InputTitle>
                    이름
                </InputTitle>
                <InputName>
                    {userInfo.userName}
                </InputName>
            </InputNameBox>
            <InputEmailBox>
                <InputTitle>
                    이메일
                </InputTitle>
                <InputName>
                    {userInfo.email}
                </InputName>
            </InputEmailBox>
            <InputPasswordBox>
                <InputTitle>
                    비밀번호
                </InputTitle>
                <InputName>
                    {userInfo.password}
                </InputName>
            </InputPasswordBox>
            <InputPhoneNumBox>
                <InputTitle>
                    전화번호
                </InputTitle>
                <InputName>
                    {userInfo.phoneNumber}
                </InputName>
            </InputPhoneNumBox>
            <InputFavBox>
                <InputTitle>
                    선호 브랜드
                </InputTitle>
                <InputName>
                    {userInfo.favBrand}
                </InputName>
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

const InputName = styled.div`
  margin-top: 5px;
  width: 350px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 1px;
  border-bottom: 1px solid black;
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

export default Profile;