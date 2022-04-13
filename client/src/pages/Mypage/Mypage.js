import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Mypage = ({ userinfo }) => {
  const [page, setPage] = useState('회원 정보');

  const getHistory = async (endpoint) => {
    if (!userinfo) {
      console.log('not logged in');
      return;
    }
    const { id } = userinfo;
    const accessToken = window.localStorage.getItem('accessToken');
    console.log(id, accessToken);
    console.log(`https://localhost:4000/orders/${id}/${endpoint}`);
    let answer = await axios({
      url: `https://localhost:4000/orders/${id}/${endpoint}`,
      method: 'GET', // or 'PUT'
      // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
        authorization: `jwt ${accessToken}`,
      },
    }).then((res) => console.log(res.data));
  };

  useEffect(() => {
    if (page === '회원 정보') {
    } else if (page === '구매 내역') {
      getHistory('buy');
    } else if (page === '판매 내역') {
      getHistory('sell');
    }
  }, [page]);

  return (
    <MypageDiv>
      <SideBar>
        <BuyList onClick={() => setPage('구매 내역')}>구매 내역</BuyList>
        <SellList onClick={() => setPage('판매 내역')}>판매 내역</SellList>
        <UserInfo onClick={() => setPage('회원 정보')}>회원 정보</UserInfo>
      </SideBar>
      <DetailList>
        <DetailBuyList>
          <Title>{page}</Title>
          <List></List>
        </DetailBuyList>
        {/* <DetailSellList>
          <Title>판매 내역</Title>
          <List></List>
        </DetailSellList>
        <DetailUserInfo>
          <Title>회원 정보</Title>
          <List></List>
        </DetailUserInfo> */}
      </DetailList>
    </MypageDiv>
  );
};

const MypageDiv = styled.div`
  width: auto;
  display: flex;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
`;
const BuyList = styled.button`
  border: none;
  width: 200px;
  height: 55px;
  background-color: white;
  font-size: 20px;
  color: #bcbcbc;
  cursor: pointer;
`;
const SellList = styled(BuyList)``;
const BorrowList = styled(BuyList)``;
const UserInfo = styled(BuyList)``;

const DetailList = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  width: 75vw;
  height: auto;
`;
const DetailBuyList = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailSellList = styled(DetailBuyList)``;
const DetailBorrowList = styled(DetailBuyList)``;
const DetailUserInfo = styled(DetailBuyList)``;

const Title = styled.div`
  font-size: 30px;
  border-bottom: 1px solid black;
`;
const List = styled.div`
  height: 140px;
`;

export default Mypage;
