import React, { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header"
import Login from "./pages/Login"
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';

function App() {
  // const [token, setToken] = useState("");
  // const [isLogin, setIsLogin] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);


  return (
    <div>
      <Header />
      <Signup />
      <Footer />
    </div>
  )
}

export default App;




