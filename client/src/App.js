import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Mypage from './pages/Mypage/Mypage';
import Landing from './pages/Landing/Landing';
import Basket from './pages/Basket/Basket';
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from 'react-router-dom';

function App() {
  // const [token, setToken] = useState("");
  // const [isLogin, setIsLogin] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const userInfo = {
    id: 9,
    userName: 'li',
    password: '1234',
    email: 'li@gamil.com',
    phoneNumber: '01012345678',
    favBrand: '닥터마틴',
  };

  return (
    <Router>
      <div className="App">
        {/* <Basket userInfo={userInfo} /> */}
        {/* <Login /> */}
        {/* <Landing></Landing> */}

        <Routes>
          <Route exact path="/">
            <Landing userInfo={userInfo} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/mypage">
            <Mypage userInfo={userInfo} />
          </Route>
          <Route path="/basket">
            <Basket userInfo={userInfo} />
          </Route>
        </Routes>
      </div>
    </Router>

    // <div>
    //     <Header />
    // </div>
  );
}
export default App;

{
  /* {isLoading && <Loding/>} */
}
{
  /* 안녕 */
}
{
  /* <Login/> */
}

{
  /* <Basket></Basket> */
}
{
  /* <NotFound/> */
}
{
  /* <Footer/> */
}
{
  /* <BrowserRouter>
     <Routes>
        <Route exact path="/">
          <Brand />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/mypage">
          {isLogin ? <Mypage /> : <Redirect to="/" />}
          <Mypage />
        </Route>
        <Route path="/Basket" component={Basket} />
        <Route path="*" component={NotFound} />
        </Routes>
      </BrowserRouter> */
}
