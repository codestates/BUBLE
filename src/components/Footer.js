import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <Top>
        <CustomerService>
          <Title>고객센터 1234-5678</Title>
          <ServiceInfo>운영시간 평일 11:00 ~ 18:00 (토, 일 공휴일 휴무)</ServiceInfo>
          <ServiceInfo>점심시간 평일 13:00 ~ 14:00</ServiceInfo>
          <InfoBlack>1:1 문의하기는 앱에서만 가능합니다.</InfoBlack>
          <Button>자주 묻는 질문</Button>
        </CustomerService>

        <MiddleMenu>
          <Title>이용안내</Title>
          <ListContainer>
            <List>검수기준</List>
            <List>이용정책</List>
            <List>패널티 정책</List>
            <List>커뮤니티 가이드라인</List>
          </ListContainer>

        </MiddleMenu>

        <RightMenu>
          <Title>고객지원</Title>
          <ListContainer>
            <List>공지사항</List>
            <List>서비스 소개</List>
            <List>패널티 정책</List>
            <List>판매자 방문접수</List>
          </ListContainer>

        </RightMenu>
      </Top>

      <Bottom>
        <BottomTop>
          <LinkGroup>
            <LinkButton>개인정보처리방침</LinkButton>
            <LinkButton>이용약관</LinkButton>
          </LinkGroup>
          <IconGroup>
            <IconButton>
              인스타
            </IconButton>
            <IconButton>
              페이스북
            </IconButton>
            <IconButton>
              카카오
            </IconButton>
          </IconGroup>
        </BottomTop>
        {/* <BottomMiddle>
          <Company>

          </Company>
        </BottomMiddle>
        <BottomLow>
          <Notice>

          </Notice>
          <Copyright>

          </Copyright>
        </BottomLow> */}
      </Bottom>
    </FooterDiv>

  )
}





const FooterDiv = styled.footer`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px
`

const Top = styled.section`
  flex: 0 0 30vh;
  display: flex;
`

const Bottom = styled.section`
  flex: 0 0 20vh;
  padding-top: 32px;
  border-top: 1px solid #aebfbe;
`

const CustomerService = styled.div`
  flex: 0 0 30vw;
`

const MiddleMenu = styled.div`
  flex: 0 0 45vw;
  text-align: right;
  
`

const RightMenu = styled.div`
  flex: 0 0 20vw;
  text-align: right;
`

const Title = styled.h1`
  padding-bottom: 25px;
  font-size: 16px;
`;

const ServiceInfo = styled.p`
  margin: 0px 0px 6px;
  color: #bcbcbc;
  font-size: 14px;
`;

const ListContainer = styled.ul``

const List = styled.li`
  list-style-type : none;
  margin-bottom: 18px;
  color: #bcbcbc;
  font-size: 14px;
`

const InfoBlack = styled(ServiceInfo)`
  margin: 12px 0 16px 0;
  color: black;
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  font-weight: 300;
  border: 1px solid black;
  background-color: black;
`

const BottomTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkGroup = styled.div`
  flex: 0 0 70vw;
  margin-bottom: 16px;
`;

const LinkButton = styled.button`
  color: black;
  background-color: white;
  border: 1px solid white;
`;

const IconGroup = styled.div`
  display: flex;
  flex: 0 0 200px;  // 왜 12까지만 되는지?
  justify-content: space-around;
`;

const IconButton = styled.button`
margin-left: 10px;
`;



// 로컬스토리지에 로그인할때 받는 토큰을 로컬스토리지에 저장

export default Footer;
