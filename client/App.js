import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function App() {
  function Button(){
    return <button>로그인</button>;
  }
  
  async function Signin(){
    await axios({ 
    url : 'https://localhost:4000/auth', 
    method: 'GET', 
    headers: { 
      'content-type' : 'application/json'
    } 
  
  })
  .then(res => {

  })
}

  return (
  
  )
}
