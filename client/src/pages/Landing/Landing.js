import styled, { CSSProp } from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Headers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
// import fontawesome from '@fortawesome/fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// import {ViewMore} from "../components/ViewMore"
//<FontAwesomeIcon icon="fa-solid fa-bookmark" />

// fav-brand 와 popular-brand를 넣어줄 컴포넌트
const Brand = ({ popularItem, handleClick }) => {
  const popularItems = (popularItem) => {
    console.log(popularItem);

    return (
      <>
        {popularItem.map((el) => {
          return (
            <Div>
              {el.map((el) => {
                return (
                  <ProductDiv>
                    <ProductImage el={el}></ProductImage>
                    <ProductMark>
                      <FontAwesomeIcon icon={faBookmark} className="mark" />
                    </ProductMark>
                    <ProductInfo>
                      <ProductName>{el.brand}</ProductName>
                      <ProductContent>{el.itemName}</ProductContent>
                      <ProductPrice>{el.buyPrice}</ProductPrice>
                      <Productnow>즉시구매가</Productnow>
                    </ProductInfo>
                  </ProductDiv>
                );
              })}
            </Div>
          );
        })}
      </>
    );
  };

  return (
    <BrandContainer>
      <Top>
        <Area>
          <FavDiv>
            Preferred
            <FavDivBottom>선호 등록 상품</FavDivBottom>
          </FavDiv>
        </Area>

        {/* {products()}
        {products()}
        {products()} */}
      </Top>
      <Morebtn onClick={() => handleClick()}>
        더보기
        <FontAwesomeIcon icon={faCaretDown} className="more" />
      </Morebtn>

      <Bottom>
        <Area>
          <PopularDiv>
            Popular
            <PopularDivBottom>인기 등록 상품</PopularDivBottom>
          </PopularDiv>
        </Area>
        {popularItems(popularItem)}
      </Bottom>
      <Morebtn onClick={() => handleClick()}>
        더보기
        <FontAwesomeIcon icon={faCaretDown} className="more" />
      </Morebtn>
    </BrandContainer>
  );
};
//<FontAwesomeIcon icon="fa-solid fa-caret-down" />
// const = styled.``
const BrandContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 1200px;
  background-color: white;
`;
//Top, Area, FavDiv, Product_Image, Product_info, Product_name, Product_content, Product_price
// up
const Top = styled.div`
  width: 90%;
  height: 500px;
`;
// 좋아하는 브랜드
const FavDiv = styled.div`
  font-weight: 700;
  margin-left: 12vw;
  width: 200px;
  height: 80px;
  font-size: 20px;
`;
const FavDivBottom = styled.div`
  color: #999999;
  width: 185px;
  height: 50px;
  font-size: 12px;
`;

// 공통
const Area = styled.div`
  width: 50%;
  height: 60px;
`;
const Div = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  height: 380px;
`;
const ProductDiv = styled.div`
  display: inline-block;
  margin: 0.7em;
  width: 14vw;
  height: 14vh;
`;
const ProductInfo = styled.div`
  margin-top: 0.3em;
  width: 100%;
  height: 100px;
`;
const ProductImage = styled.div`
  background-image: url(${(props) => `${props.el.img}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3%;
  border: 1px solid whitesmoke;
  width: 100%;
  height: 250px;
`;
const ProductMark = styled.div`
  font-size: 15px;
`;
const ProductName = styled.div`
  font-weight: 600;
  text-align: start;
  width: 100%;
  height: 25px;
`;
const ProductContent = styled.div`
  text-align: start;
  font-weight: 350;
  font-size: 14px;
  width: 100%;
  height: 30px;
`;
const ProductPrice = styled.div`
  text-align: start;
  font-weight: border;
  font-size: 16px;
  width: 100%;
  height: 20px;
  margin: 0;
`;
// 즉시구매
const Productnow = styled.div`
  margin: 0;
  color: #bcbcbc;
  text-align: start;
  font-size: 0.5em;
`;
//더보기
const Morebtn = styled.div`
  line-height: 50px;
  border-radius: 12px;
  padding: 0 30;
  border: 1px solid #bcbcbc;
  text-align: center;
  font-size: 1em;
  font-weight: 400;
  width: 6vw;
  height: 5vh;
  color: #444444;
  cursor: pointer;
`;

// down
const Bottom = styled.div`
  width: 90%;
  height: 500px;
`;
// 인기 브랜드
const PopularDiv = styled.div`
  font-weight: 700;
  margin-left: 11.5vw;
  width: 200px;
  height: 80px;
  font-size: 20px;
`;
const PopularDivBottom = styled.div`
  color: #999999;
  margin-left: 0.3vw;
  width: 188px;
  height: 50px;
  font-size: 12px;
`;

// 랜딩 페이지
const Landing = ({ userinfo }) => {
  const [popularItem, setPopularItem] = useState([]);
  // console.log(popularItem);

  useEffect(() => {
    handlePopularItem();
  }, []);

  const handleClick = async () => {
    await axios({
      url: `https://localhost:4000/items/popular`,
      method: 'get',
    }).then((res) => {
      const { popular } = res.data;
      setPopularItem([...popularItem, [...popular]]);
    });
  };

  const handlePopularItem = async () => {
    await axios({
      url: `https://localhost:4000/items/popular`,
      method: 'get',
    }).then((res) => {
      const { popular } = res.data;
      setPopularItem([popular]);
    });
  };

  return (
    <LandingDiv>
      <LandingTop>
        <Header />
      </LandingTop>
      <LandingMiddle>
        <Brand popularItem={popularItem} handleClick={handleClick} />
      </LandingMiddle>
      <LandingBottom>
        <Footer />
      </LandingBottom>
    </LandingDiv>
  );
};

const LandingDiv = styled.div``;
const LandingTop = styled.div`
  width: 100%;
  height: 200px;
`;
const LandingMiddle = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1200px;
`;
const LandingBottom = styled.div`
  width: 100%;
`;
export default Landing;