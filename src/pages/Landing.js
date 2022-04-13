import styled from 'styled-components'
<<<<<<< HEAD
import Footer from "../components/Footer";
import Header from "../components/Header";
import {ViewMore} from "../components/ViewMore"



// fav-brand 와 popular-brand를 넣어줄 컴포넌트

const Brand = () => {
    const products = function product (){
        return (
            <ProductDiv>
                <ProductImage/>
                <ProductInfo>
                    <ProductName></ProductName>
                    <ProductContent></ProductContent>
                    <ProductPrice></ProductPrice>
                </ProductInfo>
            </ProductDiv>
     )
    }
 return (
    <BrandContainer>
    <Top>//! 상단 
        <Area>
            <FavDiv>선호 브랜드</FavDiv>
        </Area>
        <Div>
           {products()}
           {products()}
           {products()}
           {products()}
        </Div>
    </Top>
    <Morebtn>더보기</Morebtn>
   
    <Bottom>//! 하단
        <Area>
            <PopularDiv>인기 브랜드</PopularDiv>
        </Area>
        <Div>
           {products()}
           {products()}
           {products()}
           {products()}
        </Div>
    </Bottom>
    <Morebtn>더보기</Morebtn>
    </BrandContainer>
    
 )
}

// const = styled.``
const BrandContainer = styled.div`
  position: relative;
  padding:28px ;
  display: grid;
  place-items: center;
  width: 100%;
  height: 1200px;
  margin-top: 50px;
  background-color: white;
`
//Top, Area, FavDiv, Product_Image, Product_info, Product_name, Product_content, Product_price
// up 
const Top = styled.div`
width: 90%;
height: 500px;
border: 1px solid black;

`
const FavDiv = styled.div`
width: 90px;
height: 50px;
border: 1px solid black;

`

// 공통
const Area = styled.div`
width: 100%;
height: 60px ;
border: 1px solid black;

`
const Div = styled.div`
/* position: flex; */
border: 1px solid black;

display:flex ;
width: 100%;
height: 380px;
`
const ProductDiv = styled.div`
    border: 1px solid black;

position: flex;
margin: 2em;
width: 25%;
height: 380px;
`
const ProductInfo = styled.div`
    border: 1px solid black;

width: 100%;
height: 100px;
`
const ProductImage = styled.div`
border: 1px solid black;
width: 100%;
height: 250px;
`
const ProductName = styled.div`
border: 1px solid black;
width: 100%;
height: 30px;
`
const ProductContent = styled.div`
border: 1px solid black;
width: 100%;
height: 30px;
`
const ProductPrice = styled.div`
border: 1px solid black;
width: 100%;
height: 30px;
`
const Morebtn = styled.div`
border: 1px solid black;
width: 80px;
height: 50px;
`


// down
const Bottom = styled.div`
border: 1px solid black;
width: 90%;
height: 500px;
`
const PopularDiv = styled.div`
border: 1px solid black;
width: 90px;
height: 50px;
`




// 랜딩 페이지
const Landing = () => {
    return (
        <LandingDiv>
        <LandingTop></LandingTop>
        <LandingMiddle>
            <Brand/>
        </LandingMiddle>
        <LandingBottom>
            <Footer/>
        </LandingBottom>
        </LandingDiv>
    )
    
    
} 

const LandingDiv = styled.div`
    /* border: 1px solid black; */
    margin:0;
    padding:0;
`
const LandingTop = styled.div`
    /* border: 1px solid black; */

    width: 100%;
    height: 200px;
    /* background-color: blue ; */
`
const LandingMiddle = styled.div`
    border: 1px solid black;

    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1200px;
`
const LandingBottom = styled.div`
    width: 100%;
    /* height: 1000px; */
    /* background-color: grey ; */
`
export default Landing;
=======


>>>>>>> edaf132 (test2)
