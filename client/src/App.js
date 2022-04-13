import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Mypage from './pages/Mypage/Mypage';
import Landing from './pages/Landing/Landing';
function App() {
  const [token, setToken] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userinfo, setUserinfo] = useState(null);

  return (
    <div className="App">
      {/* {isLoading && <Loding/>} */}
      {/* 안녕 */}

      {console.log(isLogin)}

      <Header isLogin={isLogin} />
      <Mypage userinfo={userinfo} />
      <Footer />

      {isLogin ? (
        <Mypage userinfo={userinfo} />
      ) : (
        <Login
          setUserinfo={setUserinfo}
          userinfo={userinfo}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
        />
      )}

      {/* <Landing /> */}

      {/* <Basket></Basket> */}
      {/* <NotFound/> */}
      {/* <Footer/> */}
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
    </div>
  );
}
export default App;
