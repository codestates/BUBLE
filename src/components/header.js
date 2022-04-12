import React from "react";
import styled from "styled-components";

const Header = () => {
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
          <Login>Login</Login>
        </IconGroup>

      </HeaderTop>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid #aebfbe;
  height: 60px;
`;

const Logo = styled.div`
  display: relative;
  flex: 0 0 300px; 
  font-size: 40px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
`

const SearchIcon = styled.div`
  font-size: 23px;
  flex: 0 0 300px;
`
const IconGroup = styled.div`
  display: flex;
  flex: 0 0 300px; 
  justify-content: space-around;
`;

const Notice = styled.div`
  font-size: 13px;
`;
const Wish = styled(Notice)``;
const Mypage = styled(Notice)``;
const Login = styled(Notice)``;

export default Header;