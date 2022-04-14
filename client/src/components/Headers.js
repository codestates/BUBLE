import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Header = ({ isLogin }) => {
  console.log(isLogin);
  const [click, setClick] = useState(false);

  const handleSignout = async () => {
    const accessToken = window.localStorage.getItem('accessToken');
    console.log('signout :', accessToken);
    if (accessToken) {
      window.localStorage.removeItem('accessToken');
    } //accessToken삭제
    //cookie에서 refreshToken 삭제 필요
    let answer = await axios({
      url: 'https://localhost:4000/users/signout',
      method: 'POST', // or 'PUT'
      // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
        authorization: `jwt ${accessToken}`,
      },
    }).then((res) => console.log(res.data));
  };

  return (
    <HeaderDiv>
      <HeaderTop>
        <SearchIcon>
          <i class="fa-solid fa-magnifying-glass"></i>
        </SearchIcon>
        <Logo>BUBLE</Logo>
        <IconGroup>
          <Notice>고객센터</Notice>
          <Wish>관심상품</Wish>
          <Mypage>마이페이지</Mypage>
          {isLogin ? (
            <Login onClick={handleSignout}>Logout</Login>
          ) : (
            <Login>Login</Login>
          )}
        </IconGroup>
      </HeaderTop>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #aebfbe;
  height: 60px;
`;

const Logo = styled.a`
  display: relative;
  flex: 0 0 300px;
  font-size: 40px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  cursor: pointer;
`;

const SearchIcon = styled.div`
  font-size: 23px;
  padding-top: 4px;
  flex: 0 0 300px;
`;
const IconGroup = styled.div`
  display: flex;
  flex: 0 0 300px;
  justify-content: space-around;
  padding-bottom: 35px;
`;

const Notice = styled.button`
  font-size: 13px;
  cursor: pointer;
  background-color: white;
  border: none;
  text-align: top;
`;
const Wish = styled(Notice)``;
const Mypage = styled(Notice)``;
const Login = styled(Notice)``;

export default Header;
