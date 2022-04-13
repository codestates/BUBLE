import axios from "axios";
import React, { useEffect, useState } from "react";
//구매, 판매하는 상세 상품 페이지

const Product = ({ postHistory }) => {
  return (
    <div>
      <button id="1" onClick={(e) => postHistory(e.target.id, "buy")}>
        구매
      </button>
      <button id="2" onClick={(e) => postHistory(e.target.id, "sell")}>
        판매
      </button>
    </div>
  );
};

export default Product;
