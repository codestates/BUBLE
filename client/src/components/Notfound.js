import React from 'react';
import styled from 'styled-components'
// 사진을 찾아서 가져와볼것.
function NotFound() {
  return (
    <notFound>
      <Content>
        <Img alt="!"></Img>
        <P>404 Page Not Found</P>
        <P>잘못된 접근입니다</P>
        </Content>
      </notFound>
  );
}

const notFound = styled.div`
  width: 100vw;
  height: 100vh;
`
const Content = styled.div`
  width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    margin: auto;
`
const Img = styled.img`
      min-width: 80px;
      width: 30%;
      filter: $f-light-grey;
      margin-bottom: 10px;
`
  const P = styled.p`
      font-size: 1.2rem;
      text-align: center;
      color: $deep-grey;
  `
    
    
   
    // &:nth-child(1) p {
    //   margin-bottom: 10px;
    // }





export default NotFound;