import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterDiv>
      <Top>
        <CustomerService>
          <Title>고객센터 1234-5678</Title>
          <ServiceInfo>
            운영시간 평일 11:00 ~ 18:00 (토, 일 공휴일 휴무)
          </ServiceInfo>
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
              <i class="fa-brands fa-instagram"></i>
            </IconButton>
            <IconButton>
              <i class="fa-brands fa-facebook"></i>
            </IconButton>
            <IconButton>
              <i class="fa-solid fa-comment"></i>
            </IconButton>
          </IconGroup>
        </BottomTop>
        <BottomMiddle>
          <Company>BUBLE 주식회사</Company>
        </BottomMiddle>
        <BottomLow>
          <Notice>
            버블(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
            판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다.
            <br />
            단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에
            있습니다.
          </Notice>
          <Copyright>© BUBLE Corp.</Copyright>
        </BottomLow>
      </Bottom>
    </FooterDiv>
  );
};

const FooterDiv = styled.footer`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  // background-color: white;
  padding: 32px;
  margin-top: 30px;
`;

const Top = styled.section`
  flex: 0 0 30vh;
  display: flex;
`;

const Bottom = styled.section`
  flex: 0 0 20vh;
  padding-top: 32px;
  border-top: 1px solid #aebfbe;
`;

const CustomerService = styled.div`
  flex: 0 0 30vw;
`;

const MiddleMenu = styled.div`
  flex: 0 0 45vw;
  text-align: right;
`;

const RightMenu = styled.div`
  flex: 0 0 20vw;
  text-align: right;
`;

const Title = styled.h1`
  padding-bottom: 20px;
  font-size: 16px;
`;

const ServiceInfo = styled.p`
  margin: 0px 0px 6px;
  color: #bcbcbc;
  font-size: 14px;
`;

const ListContainer = styled.ul``;

const List = styled.li`
  list-style-type: none;
  margin-bottom: 18px;
  color: #bcbcbc;
  font-size: 14px;
`;

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
  cursor: pointer;
`;

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
  cursor: pointer;
`;

const IconGroup = styled.div`
  display: flex;
  flex: 0 0 200px;
  justify-content: space-around;
`;

const IconButton = styled.button`
  font-size: 25px;
  background-color: transparent;
  border: 0;
  margin-left: 10px;
  cursor: pointer;
`;

const BottomMiddle = styled.div``;

const Company = styled(ServiceInfo)`
  padding-left: 6px;
`;

const BottomLow = styled.div`
  display: flex;
  align-items: center;
`;

const Notice = styled.p`
  padding-left: 6px;
  color: #bcbcbc;
  font-size: 13px;
`;

const Copyright = styled.p`
  font-size: 14px;
  flex: 1 0 0vw;
  color: #bcbcbc;
  text-align: right;
`;

// 로컬스토리지에 로그인할때 받는 토큰을 로컬스토리지에 저장

export default Footer;
