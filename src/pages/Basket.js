import styled from 'styled-components'
import Footer from "../components/Footer";
// 관심상품
function Basket() {
    const BasketBodyContent = function BBC() {
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
                <Footer />
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
diplay: flex;
height: 55vh ;
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
padding-left: 1.5em ;
padding-top: 1.5em ;
height: 2em;
width: 8em ;
`
const TitleSelect = styled.div`
border: 1px solid black;
display:flex ;
height: 2em;

`
const SelectAll = styled.check`
border: 1px solid black;
`
const SelectDelete = styled.div`
border: 1px solid black;
`
const BasketBody = styled.div`
border: 1px solid black;
height: 2em;
`
const BodyDiv = styled.div`
border: 1px solid black;
height: 1em;
`
const BodyDivCheck = styled.div`
border: 1px solid black;
`
const BodyDivImg = styled.div`
border: 1px solid black;
`
const BodyDivContent = styled.div`
border: 1px solid black;
`
const ContentName = styled.div`
border: 1px solid black;
`
const ContentSize = styled.div`
border: 1px solid black;
`
const ContentGrade = styled.div`
border: 1px solid black;
`
const BodyDivPrice = styled.div`
border: 1px solid black;
`
const BasketSum = styled.div`

`
const SumDiv = styled.div`

`
//하단
const BasketBottom = styled.div``


export default Basket;