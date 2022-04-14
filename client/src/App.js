import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch as Routes, Route } from 'react-router-dom';
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
  const [header, setHeader] = useState(true);

  const pathname = window.location.pathname;

  const locationHandler = () => {
    if (pathname === '/login' || pathname === '/signup') {
      setHeader(false);
    } else {
      setHeader(true);
    }
  };

  useEffect(() => {
    locationHandler();
  }, []);

  return (
    <div className="App">
      {/* {isLoading && <Loding/>} */}
      {/* 안녕 */}

      {console.log(isLogin)}
      {console.log(typeof pathname)}
      {header ? <Header isLogin={isLogin} /> : null}

      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Landing isLogin={isLogin} />
          </Route>

          <Route path="/userinfo">
            <Mypage userinfo={userinfo} />
          </Route>

          <Route path="/login">
            <Login
              setUserinfo={setUserinfo}
              userinfo={userinfo}
              setIsLogin={setIsLogin}
              isLogin={isLogin}
            />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>
        </Routes>
      </BrowserRouter>

      {header ? <Footer /> : null}

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
