import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Mypage = () => {
  return (
    <MypageDiv>
      <SideBar>
        <BuyList>
          구매 내역
        </BuyList>
        <SellList>
          판매 내역
        </SellList>
        <BorrowList>
          대여 내역
        </BorrowList>
        <UserInfo>
          회원 정보
        </UserInfo>
      </SideBar>
      <DetailList>
        <DetailBuyList>
          <Title>
            구매 내역
          </Title>
          <List>

          </List>
        </DetailBuyList>
        <DetailSellList>
          <Title>
            판매 내역
          </Title>
          <List>

          </List>
        </DetailSellList>
        <DetailBorrowList>
          <Title>
            대여 내역
          </Title>
          <List>

          </List>
        </DetailBorrowList>
        <DetailUserInfo>
          <Title>
            회원 정보
          </Title>
          <List>

          </List>
        </DetailUserInfo>
      </DetailList>
    </MypageDiv>
  )
}

const MypageDiv = styled.div`
  width: auto;
  display: flex;
  `

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
  `
const BuyList = styled.button`
  border: none;
  width: 200px;
  height: 55px;
  background-color: white;
  font-size: 20px;
  color: #bcbcbc;
  cursor: pointer;
  `
const SellList = styled(BuyList)``
const BorrowList = styled(BuyList)``
const UserInfo = styled(BuyList)``


const DetailList = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  width: 75vw;
  height: auto;

`
const DetailBuyList = styled.div`
    display: flex;
    flex-direction: column;
  `

const DetailSellList = styled(DetailBuyList)``
const DetailBorrowList = styled(DetailBuyList)``
const DetailUserInfo = styled(DetailBuyList)``

const Title = styled.div`
  font-size: 30px;
  border-bottom: 1px solid black;
  `
const List = styled.div`
  height: 140px;
`

export default Mypage;