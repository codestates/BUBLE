//구매, 판매내역 확인
import axios from "axios";
import React, { useEffect, useState } from "react";

const Mypage = ({ getHistory }) => {
  return (
    <div>
      <button onClick={() => getHistory("buy")}>구매내역</button>
      <button onClick={() => getHistory("sell")}>판매내역</button>
    </div>
  );
};

export default Mypage;
