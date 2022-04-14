import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

// 스테이트로 카운터해서 값이 추가될때마다 카운트가 올라가고 삭제하면 하나 삭제할때마다
// 관심상품
function Basket({ isLogin, setIsLogin, userInfo }) {
  const [isOne, setisOne] = useState(false);
  const isTwo = !isOne;
  const [buyCartsGet, setBuyCartsGet] = useState([]);

  // console.log(userinfo);

  useEffect(() => {
    handlebuyCarts(userInfo);
  }, []);

  const handlebuyCarts = async ({ id }) => {
    id = Number(id);
    const accessToken = window.localStorage.getItem('accessToken');
    await axios({
      url: `https://localhost:4000/likes/${id}/buy`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `jwt ${accessToken}`,
      },
    }).then((res) => {
      const { message } = res.data;
      // console.log(message);
      setBuyCartsGet(message);
    });
  };

  const CheckBox = function Checks() {
    const CheckHandler = () => {
      setisOne(!isOne);
    };

    // if(isOn === true){
    //     return true;
    // }
    return (
      <Check>
        <Checking
          onClick={CheckHandler}
          className={isOne === true ? 'checked' : ''}
        />
      </Check>
    );
  };

  const BasketBodyContent = (buyCartsGet) => {
    return buyCartsGet.map((item) => {
      return (
        <BodyDiv>
          <BodyDivCheck>
            {CheckBox()}
            {/* {console.log('--------', CheckBox())} */}
            {console.log(item)}
          </BodyDivCheck>
          <BodyDivImg item={item}></BodyDivImg>
          <BodyDivContent>
            <ContentName>{item.itemName}</ContentName>
            <ContentSize>{item.size}</ContentSize>
            <ContentGrade>{item.grade}</ContentGrade>
          </BodyDivContent>
          <BodyDivPrice>{item.buyPrice} 원</BodyDivPrice>
        </BodyDiv>
      );
    });
  };

  return (
    <Div>
      <BasketTop>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      </BasketTop>
      <BasketMiddle>
        <BasketTitle>
          <TitleDiv>관심 상품</TitleDiv>
          <TitleSelect>
            <Box>{CheckBox()}</Box>
            <SelectAll>전체 선택</SelectAll>
            <Box>{CheckBox()}</Box>
            <SelectDelete>선택 삭제</SelectDelete>
          </TitleSelect>
        </BasketTitle>
        <BasketBody>{BasketBodyContent(buyCartsGet)}</BasketBody>
        <BasketSum>
          <CalculatorText>{/* 총 3개 가격 210000 won */}</CalculatorText>
          <SumDiv>구매하기</SumDiv>
        </BasketSum>
      </BasketMiddle>
      <BasketBottom>
        <Footer />
      </BasketBottom>
    </Div>
  );
}

// css
const Div = styled.div`
  margin: 0;
  padding: 0;
`;

//상단
const BasketTop = styled.div`
  /* height: 150px ;
border: 1px solid blue; */
`;
//중단
const BasketMiddle = styled.div`
  height: 70vh;
  /* border: 1px solid black; */
  margin-top: 3em;
  /* display: flex; */
`;
const BasketTitle = styled.div`
  /* border: 1px solid black; */
  height: 7em;
  /* margin: 1em; */
`;
const TitleDiv = styled.div`
  border-bottom: 2px solid darkgray;
  margin-left: 20vw;
  margin-top: 10px;
  margin-bottom: 10px;
  /* padding-left: 1.5em ;
padding-top: 1.5em ; */
  height: 1.5em;
  width: 52vw;
  font-size: 1.5em;
`;
const TitleSelect = styled.div`
  /* border: 1px solid black; */
  display: flex;
  height: 3em;
  margin-left: 19vw;
  text-align: center;
  vertical-align: center;
`;
const SelectAll = styled.div`
  /* border: 1px solid black; */
  margin-top: 14px;
  margin-left: 10px;
  height: 1.5em;
  font-size: 13px;
  /* width: 5em; */
`;
const SelectDelete = styled.div`
  /* border: 1px solid black; */
  margin-top: 14px;
  margin-left: 10px;
  height: 1.5em;
  font-size: 13px;
`;
const Box = styled.div`
  margin-top: 14px;
  margin-left: 15px;
`;
// 체크박스
const Check = styled.div`
  /* position: absolute; */
  place-items: center;
  vertical-align: center;
  text-align: center;
  position: center;
  border-radius: 100%;
  border: 1px solid black;
  height: 15px;
  width: 15px;
`;
const Checking = styled.div`
  /* position: absolute; */
  /* margin-left: 1px ; */
  margin: 1.05px;
  position: center;
  border-radius: 100%;
  border: 2px solid darkgray;
  height: 9px;
  width: 9px;
  cursor: pointer;
  &.checked {
    background-color: black;
  }
`;

const BasketBody = styled.div`
  //Div의 부모
  margin-top: 1em;
  /* border: 1px solid black; */
  height: 40vh;
  /* align-items: center;
justify-content: center;
text-align: center; */
  overflow: auto;
`;
const BodyDiv = styled.div`
  // Body의 자식
  margin-left: 20.2vw;
  /* display: inline-block ; */
  border-bottom: 1px solid #bcbcbc;
  display: flex;
  height: 20vh;
  width: 52vw;
  place-items: center;
  /* align-items: center; */
  /* flex-direction:column; */
`;
const BodyDivCheck = styled.div`
  margin-left: 1.5vw;
  height: 1em;
  /* border: 1px solid black; */
  width: 1.2vw;
`;
const BodyDivImg = styled.div`
  background-image: url(${(props) => `${props.item.img}`});
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
  height: 6em;
  width: 25%;
  text-align: start;
  padding-top: 5px;
  margin-left: 2.5vw;
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
  width: 25%;
  vertical-align: center;
  text-align: center;
  flex-direction: column;
  color: #333333;
`;
const BasketSum = styled.div`
  height: 10em;
  width: 100%;
  /* display:flex ; */
  justify-items: center;
  /* place-items:center; */
  text-align: center;
`;
const CalculatorText = styled.div`
  font-size: 19px;
  width: 35vh;
  height: 8vh;
`;
const SumDiv = styled.button`
  border-radius: 6%;
  margin-left: 60vh;
  color: white;
  font-size: 1.5em;
  background-color: #222222;
  display: inline-block;
  width: 25vh;
  height: 8vh;
  cursor: pointer;
  /* flex-direction:column; */
  /* border: 1px solid black; */
`;
//하단
const BasketBottom = styled.div``;

export default Basket;
