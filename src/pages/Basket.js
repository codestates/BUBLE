import styled from 'styled-components'
import Footer from "../components/Footer";
// 관심상품
function Basket () {
    const BasketBodyContent = function BBC () {
        return (
            <BodyDiv>
                <BodyDivCheck></BodyDivCheck>
                <BodyDivImg></BodyDivImg>
                <BodyDivContent>
                    <ContentName>Product Name</ContentName>
                    <ContentSize>Size</ContentSize>
                    <ContentGrade>Grade</ContentGrade>
                </BodyDivContent>
                <BodyDivPrice></BodyDivPrice>
            </BodyDiv>
        )
    }

 return (
    <Div>
    <BasketTop>
        헤더 들어가야돼
    </BasketTop>
    <BasketMiddle>
        <BasketTitle>
            <TitleDiv>관심상품</TitleDiv>
            <TitleSelect>
                <SelectAll>전체선택</SelectAll>
                <SelectDelete>선택삭제</SelectDelete>    
            </TitleSelect>
        </BasketTitle>
        <BasketBody>
            {BasketBodyContent()}
        </BasketBody>
        <BasketSum>
            <SumDiv>결제하기</SumDiv>
        </BasketSum>
    </BasketMiddle>
    <BasketBottom>
        <Footer/>
    </BasketBottom>
    </Div>
 )
}

// css
const Div = styled.div`
margin:0 ;
padding:0 ;
`

//상단
const BasketTop = styled.div`
height: 150px ;
border: 1px solid blue;
`
//중단
const BasketMiddle = styled.div`

height: 70vh ;
border: 1px solid black;
margin-top: 2em;
`
const BasketTitle = styled.div`
border: 1px solid black;
height: 60px ;
/* margin: 1em; */
`
const TitleDiv = styled.div`
border: 1px solid black;
margin-left: 30px;
margin-top: 10px;
margin-bottom: 10px;
padding-left: 1.5em ;
padding-top: 1.5em ;
height: 0.9em;
width: 5em ;
`
const TitleSelect = styled.div`
border: 1px solid black;
display:flex ;
height: 3em;
text-align: center;
vertical-align: center;
`
const SelectAll = styled.div`
border: 1px solid black;
margin-left: 30px;
`
const SelectDelete = styled.div`
border: 1px solid black;
margin-left: 15px;
`
const BasketBody = styled.div`//Div의 부모
margin-top: 3em;
border: 1px solid black;
height: 40vh;
align-items: center;

`
const BodyDiv = styled.div`// Body의 자식
border: 1px solid black;
display:flex ;
height: 30vh;
width: 80% ;
justify-content: center;
/* align-items: center; */
/* flex-direction:column; */
`
const BodyDivCheck = styled.div`
border: 1px solid black;
width: 25%; 
`
const BodyDivImg = styled.div`
height: 8em;
border: 1px solid black;
width: 25%; 
`
const BodyDivContent = styled.div`
border: 1px solid black;
width: 25%; 
`
const ContentName = styled.div`
border: 1px solid black;
height: 33.3% ;
`
const ContentSize = styled.div`
border: 1px solid black;
height: 33.3% ;
`
const ContentGrade = styled.div`
border: 1px solid black;
height: 33.3% ;
`
const BodyDivPrice = styled.div`
border: 1px solid black;
width: 25%; 
`
const BasketSum = styled.div`

`
const SumDiv = styled.div`

`
//하단
const BasketBottom = styled.div``


export default Basket;