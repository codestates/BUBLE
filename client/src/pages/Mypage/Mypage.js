import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import Signup from '../Signup/Signup';
import Profile from '../../components/Profile';
import SetProfile from '../../components/SetProfile';

const Mypage = ({ userInfo, setIsLogin, isLogin }) => {
  const [update, setUpdate] = useState(true);
  console.log(update);
  console.log(userInfo);

  //itemId

  const [page, setPage] = useState('회원 정보');
  const [buyInfo, setBuyInfo] = useState([
    {
      itemName: '',
      brand: '',
      size: '',
      img: '',
      grade: '',
      buyPrice: '',
      sellPrice: '',
      quantity: '',
    },
  ]);

  console.log(buyInfo);

  const [sellInfo, setSellInfo] = useState([
    {
      itemName: '',
      brand: '',
      size: '',
      img: '',
      grade: '',
      buyPrice: '',
      sellPrice: '',
      quantity: '',
    },
  ]);
  console.log(sellInfo);

  const userHandler = () => {
    if (update) {
      return <Profile userInfo={userInfo} setUpdate={setUpdate} />;
    } else {
      return <SetProfile userInfo={userInfo} setUpdate={setUpdate} />;
    }
  };

  const pageHandler = () => {
    if (page === '구매 내역') {
      return <div>{buyInfo.map((el) => BasketBodyContent(el))}</div>;
    } else if (page === '판매 내역') {
      return <div>{sellInfo.map((el) => BasketBodyContent(el))}</div>;
    }
  };

  const getHistory = async (endpoint) => {
    if (!userInfo) {
      console.log('not logged in');
      return;
    }
    const { id } = userInfo;
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
    }).then((res) => {
      if (endpoint === 'buy') {
        setBuyInfo(res.data.data);
      } else if (endpoint === 'sell') {
        setSellInfo(res.data.data);
      }
    });
  };

  useEffect(() => {
    if (page === '회원 정보') {
    } else if (page === '구매 내역') {
      getHistory('buy');
    } else if (page === '판매 내역') {
      getHistory('sell');
    }
  }, [page]);

  const BasketBodyContent = (el) => {
    console.log(el.id, el.size);
    return (
      <BodyDiv>
        <BodyDivImg el={el}></BodyDivImg>
        <BodyDivContent>
          <ContentName>{el.itemName}</ContentName>
          <ContentSize>{el.size}</ContentSize>
          <ContentGrade>{el.grade}</ContentGrade>
        </BodyDivContent>
        <BodyDivPrice>
          {el.buyPrice !== undefined ? el.buyPrice : el.sellPrice}
        </BodyDivPrice>
      </BodyDiv>
    );
  };

  return (
    <div>
      <Header setIsLogin={setIsLogin} isLogin={isLogin} />
      <MypageDiv>
        <SideBar>
          <BuyList onClick={() => setPage('구매 내역')}>구매 내역</BuyList>
          <SellList onClick={() => setPage('판매 내역')}>판매 내역</SellList>
          <UserInfo onClick={() => setPage('회원 정보')}>회원 정보</UserInfo>
        </SideBar>
        <DetailList>
          <DetailBuyList>
            <ParentTitle>{page}</ParentTitle>
            <List>{page === '회원 정보' ? userHandler() : pageHandler()}</List>
          </DetailBuyList>
        </DetailList>
      </MypageDiv>
      <Footer />
    </div>
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

const ParentTitle = styled.div`
  font-size: 30px;
  border-bottom: 1px solid black;
`;
const Title = styled(ParentTitle)`
  margin-top: 80px;
`;
const List = styled.div`
  margin-top: 20px;
  height: auto;
  /* border: 1px solid black; */
  /* align-items: center;
justify-content: center;
text-align: center; */
`;

const BodyDiv = styled.div`
  // Body의 자식
  /* display: inline-block ; */
  border-bottom: 1px solid #bcbcbc;
  display: flex;
  height: 20vh;
  place-items: center;
  margin-top: 20px;
  /* align-items: center; */
  /* flex-direction:column; */
`;

const BodyDivImg = styled.div`
  background-image: url(${(props) => `${props.el.img}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 8em;
  border: 1px solid grey;
  border-radius: 6%;
  width: 8vw;
  margin-left: 1.5vw;
`;
const BodyDivContent = styled.div`
  display: inline;
  /* vertical-align: center; */
  /* border: 1px solid black; */
  /* border-radius: 10%; */
  height: 8em;
  width: 25%;
  text-align: start;
  padding-top: 5px;
  margin-left: 20px;
`;
const ContentName = styled.p`
  /* border: 1px solid black; */
  /* margin-top: 1px; */
  margin: 0.3em;
  border-bottom: 1px solid #bcbcbc;
  vertical-align: center;
  height: 2em;
`;
const ContentSize = styled.p`
  margin: 0.3em;
  border-bottom: 1px solid #bcbcbc;
  /* border: 1px solid black; */
  vertical-align: center;
  height: 2em;
`;
const ContentGrade = styled.p`
  margin: 0.3em;
  border-bottom: 1px solid #bcbcbc;
  /* border: 1px solid black; */
  vertical-align: center;
  height: 2em;
`;
const BodyDivPrice = styled.p`
  display: inline;
  margin-left: 1.5vw;
  margin-top: 6.5em;
  border-bottom: 1px solid #bcbcbc;
  /* border: 1px solid black; */
  height: 1em;
  width: 15%;
  vertical-align: center;
  text-align: right;
  flex-direction: column;
  color: #333333;
`;

export default Mypage;
