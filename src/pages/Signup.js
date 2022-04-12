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
        <InputName>

        </InputName>
      </InputNameBox>
      <InputIdBox>
        <InputTitle>
          아이디*
        </InputTitle>
        <InputId>

        </InputId>
      </InputIdBox>
      <InputPasswordBox>
        <InputTitle>
          비밀번호*
        </InputTitle>
        <InputPassword>

        </InputPassword>
      </InputPasswordBox>
      <InputPhoneNumBox>
        <InputTitle>
          전화번호*
        </InputTitle>
        <InputPhoneNum>

        </InputPhoneNum>
      </InputPhoneNumBox>
      <InputEmailBox>
        <InputTitle>
          이메일*
        </InputTitle>
        <InputEmail>

        </InputEmail>
      </InputEmailBox>
      <InputFavBox>
        <InputTitle>
          선호 브랜드
        </InputTitle>
        <InputFav>

        </InputFav>
      </InputFavBox>
      <SignupBtn>

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
  font-size: 40px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
`

const InputNameBox = styled.div`

  `

const InputTitle = styled.div`
  text-align: left;
  font-size: 15px;
  font-weight: bold;
  `

const InputName = styled.input``
const InputId = styled.input``
const InputPassword = styled.input``
const InputEmail = styled.input``
const InputPhoneNum = styled.input``
const InputFav = styled.div``

const SignupBtn = styled.button``

export default Signup