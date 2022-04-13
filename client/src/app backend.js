import axios from 'axios';
import React, { useState } from 'react';
import ItemDetail from './pages/itemDetail';
import BuyCartsPost from './pages/buycartsPost';
import BuyCartsGet from './pages/buyCartsGet';
// import Login from './Login';
// import Signup from './Signup';
// import Signout from './Signout';
// import Mypage from './Mypage';

function App() {
  // const [userinfo, setUserinfo] = useState(null);
  // const [loginInfo, setLoginInfo] = useState({
  //   email: '',
  //   password: '',
  // });
  // const [loginInfo, setLoginInfo] -
  //Todo : req.cookie, res.cookie 하기 <- cors로 credentials 해결하기, httpOnly, secure 등 확인하기
  const [itemInfo, setItemInfo] = useState('');
  const [buyCartsGet, setBuyCartsGet] = useState([]);
  const [buyCartsPost, setBuyCartsPost] = useState('');

  const handleItem = async (id) => {
    id = Number(id);
    console.log(typeof id);
    await axios({
      url: `https://localhost:4000/items/${id}`,
      method: 'get',
    }).then((res) => {
      const { message } = res.data;
      setItemInfo(message);
    });
  };

  const handlebuyCarts = {
    get: async ({ userid }) => {
      userid = Number(userid);
      await axios({
        url: `https://localhost:4000/likes/${userid}/buy`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.bGlAZ2FtaWwuY29t.KBC58fuyu_UfYbKQ_DXNQd6v45FXP4tSdRecfgtVkL8',
        },
      }).then((res) => {
        const { message } = res.data;
        // console.log(message);
        setBuyCartsGet(message);
      });
    },
    post: async ({ userid, itemid }) => {
      userid = Number(userid);
      itemid = Number(itemid);
      console.log(userid, itemid);
      await axios({
        url: `https://localhost:4000/likes/${userid}/buy`,
        method: 'POST',
        data: { userid, itemid },
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.bGlAZ2FtaWwuY29t.KBC58fuyu_UfYbKQ_DXNQd6v45FXP4tSdRecfgtVkL8',
        },
      }).then((res) => {
        const { message } = res.data;
        setBuyCartsPost(message);
      });
    },
  };

  // const handlebuyCarts = async ({ userid, itemid }) => {
  //   userid = Number(userid);
  //   itemid = Number(itemid);
  //   console.log(userid, itemid);
  //   await axios({
  //     url: `https://localhost:4000/likes/${userid}/buy`,
  //     method: 'POST',
  //     data: { userid, itemid },
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiJ9.bGlAZ2FtaWwuY29t.KBC58fuyu_UfYbKQ_DXNQd6v45FXP4tSdRecfgtVkL8',
  //     },
  //   }).then((res) => {
  //     const { message } = res.data;
  //     setBuyCarts(message);
  //   });
  // };

  // const handleSignin = async ({ email, password }) => {
  //   console.log(email, password);

  //   let answer = await axios({
  //     url: 'https://localhost:4000/users/signin',
  //     method: 'POST', // or 'PUT'
  //     data: { email: email, password: password }, // data can be `string` or {object}!
  //     // withCredentials: true,
  //     headers: {
  //       'Content-Type':
  //         'application/x-www-form-urlencoded; charset=UTF-8; application/json',
  //       //cors 오류 해결
  //     },
  //   }).then((res) => {
  //     window.localStorage.setItem('accessToken', res.data.accessToken);
  //     setUserinfo(res.data.data);
  //     console.log(userinfo);
  //   });
  // };
  // //다른 페이지에서 userinfo 써야니까 state는 app에다가
  // //함수를 꼭 App.js에 써야할까? 그래도 상태 끌어올리기하려면 최상단에서 실행하니까 app.js에 정의?

  // const handleSignup = async ({
  //   userName,
  //   phoneNumber,
  //   favBrand,
  //   email,
  //   password,
  // }) => {
  //   let answer = await axios({
  //     url: 'https://localhost:4000/users/signup',
  //     method: 'POST', // or 'PUT'
  //     data: {
  //       userName: userName,
  //       phoneNumber: phoneNumber,
  //       favBrand: favBrand,
  //       email: email,
  //       password: password,
  //     },
  //     // data can be `string` or {object}!
  //     withCredentials: true,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then((res) => console.log(res));
  // };

  // const handleSignout = async () => {
  //   const accessToken = window.localStorage.getItem('accessToken');
  //   console.log('signout :', accessToken);
  //   if (accessToken) {
  //     window.localStorage.removeItem('accessToken');
  //   } //accessToken삭제
  //   //cookie에서 refreshToken 삭제 필요
  //   let answer = await axios({
  //     url: 'https://localhost:4000/users/signout',
  //     method: 'POST', // or 'PUT'
  //     // data can be `string` or {object}!
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then((res) => console.log(res.data.msg));
  // };

  // const getHistory = async (endpoint) => {
  //   if (!userinfo) {
  //     console.log('not logged in');
  //     return;
  //   }
  //   const { id } = userinfo;
  //   const accessToken = window.localStorage.getItem('accessToken');
  //   console.log(id, accessToken);
  //   let answer = await axios({
  //     url: `https://localhost:4000/orders/${id}/${endpoint}`,
  //     method: 'GET', // or 'PUT'
  //     // data can be `string` or {object}!
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `jwt ${accessToken}`,
  //     },
  //   }).then((res) => console.log(res.data));
  // };

  // const postHistory = async (itemId, endpoint) => {
  //   if (!userinfo) {
  //     console.log('not logged in');
  //     return;
  //   }
  //   const { id } = userinfo;
  //   const accessToken = window.localStorage.getItem('accessToken');
  //   console.log(id, accessToken);
  //   let answer = await axios({
  //     url: `https://localhost:4000/orders/${id}/${endpoint}`,
  //     method: 'POST', // or 'PUT'
  //     // data can be `string` or {object}!
  //     data: {
  //       itemId: '1',
  //       userId: id,
  //     },
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `jwt ${accessToken}`,
  //     },
  //   }).then((res) => console.log(res.data));
  // };

  return (
    <div className="App">
      {/* <Login
        handleSignin={handleSignin}
        userinfo={userinfo}
        loginInfo={loginInfo}
        setLoginInfo={setLoginInfo}
      /> */}
      {/* <Signup handleSignup={handleSignup} />
      <Signout handleSignout={handleSignout} />
      <Mypage getHistory={getHistory} /> */}
      <ItemDetail itemInfo={itemInfo} handleItem={handleItem} />
      <BuyCartsPost
        buyCartsPost={buyCartsPost}
        handlebuyCarts={handlebuyCarts.post}
      />
      <BuyCartsGet
        buyCartsGet={buyCartsGet}
        handlebuyCarts={handlebuyCarts.get}
      />
    </div>
  );
}

export default App;
